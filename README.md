# AI Email Replier

This project is an AI-powered email response generator built using **Spring Boot**, **Ollama**, and **DeepSeek**. It allows users to input an email message and select a tone, generating a well-structured reply instantly.

## Features
- AI-generated email responses
- Customizable tones (e.g., professional, friendly, formal)
- Responsive frontend with clipboard support
- Simple and efficient workflow

## Technologies Used
- **Backend:** Spring Boot, Ollama, DeepSeek API
- **Frontend:** React, Material UI, Axios

## Installation & Setup

### Backend (Spring Boot)
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd backend
   ```
2. Install dependencies:
   ```sh
   mvn clean install
   ```
3. Configure `application.properties`:
   ```properties
   server.port=8080
   ollama.api.url=http://localhost:11434/api/chat
   ```
4. Run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend (React)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm run dev
   ```

## API Endpoints

### Generate Email Reply
- **GET** `/api/reply`
  - **Parameters:**
    - `message`: Email content (string)
    - `tone`: Desired tone (string)
  - **Example Request:**
    ```sh
    GET /api/reply?message=Hello%2C%20I%20need%20help&tone=formal
    ```
  - **Response:**
    ```json
    {
      "response": "Thank you for reaching out. I'd be happy to assist you."
    }
    ```

## Usage
1. Enter your email content in the input field.
2. Select the desired response tone.
3. Click "Generate Reply" to receive an AI-crafted response.
4. Copy the response using the clipboard button.

## To-Do
- Implement authentication
- Enhance UI/UX
- Add email integration

## Contributing
Feel free to fork this repo and submit pull requests! 🚀

