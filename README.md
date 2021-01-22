# StudioGhibliAPI

Studio Ghibli API that returns Studio Ghibli Metadata

# Endpoints
| Method | Endpoint   | Type | Description |
| ----- | ----------- | ---- | ----------- |
| `GET` | `/api/flims` | List | Lists all Studio Ghibli Flims. |
| `GET` | `/api/:id` | Object | Returns a Studio Ghibli with the correspending `id`. |
| `GET` | `/api/?q=` | List | Search flims with query parameter |