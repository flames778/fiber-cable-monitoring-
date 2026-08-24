package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	_ "github.com/lib/pq"
)

func main() {
	// Initialize Router
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// Database Connection
	dbUser := getEnv("POSTGRES_USER", "nni_user")
	dbPass := getEnv("POSTGRES_PASSWORD", "nni_password")
	dbName := getEnv("POSTGRES_DB", "nni_db")
	dbHost := getEnv("POSTGRES_HOST", "localhost")
	dbPort := getEnv("POSTGRES_PORT", "5432")

	dsn := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable", dbUser, dbPass, dbHost, dbPort, dbName)
	db, err := sql.Open("postgres", dsn)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		log.Printf("Warning: Database ping failed: %v", err)
	} else {
		log.Println("Connected to PostgreSQL database successfully.")
	}

	// Routes
	r.Get("/api/v1/health", func(w http.ResponseWriter, r *http.Request) {
		status := "UP"
		if err := db.Ping(); err != nil {
			status = "DB_DOWN"
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(fmt.Sprintf(`{"status":"%s"}`, status)))
	})

	port := getEnv("API_PORT", "8080")
	log.Printf("Starting API server on port %s", port)
	if err := http.ListenAndServe(":"+port, r); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}

func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}
