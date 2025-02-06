# FullStack Photo Album Application <img src="https://media.tenor.com/EAmrxInvWaMAAAAj/hamster-cute.gif" alt="Taking Photo Gif" width="50" height="50">

Hello everyone! Remember the [**Photo Album Management API**](https://github.com/gunsugunaydin/Photo-Album-Management-API)? I mentioned, "In the future, I intend to integrate cloud storage solutions, such as AWS S3, for managing photo storage more efficiently." 🌸 I LIED! 🌸 Instead, I chose to complete the frontend of the API.

This project is the frontend for the [**Photo Album Management API**](https://github.com/gunsugunaydin/Photo-Album-Management-API), developed using modern JavaScript and React.js. It allows users to manage photo albums, upload photos, and perform various operations on both albums and photos. The frontend interacts with the backend API to provide seamless management capabilities.

## Demo

Below is a quick demo of the **# FullStack Photo Album Application**. The demo is divided into two parts:

### Part 1:

https://github.com/user-attachments/assets/766a4567-5364-4423-a31f-58584c468cba

### Part 2:

https://github.com/user-attachments/assets/720616fc-7e93-4980-aa2e-d056c2fa1726

## Features

### User Authentication
- **Login / Logout / Register**: Users can log in, log out, and register new accounts. These menu items dynamically appear or disappear based on the user's authentication state.
  - If the user is not logged in, they will see "Login" and "Register" options.
  - If the user is logged in, only the "Logout" option will be displayed.
  
  Authentication is handled using JWT tokens, which are stored securely and checked for session management.

### Album Management
- **View Albums**: Logged-in users can view a list of all their albums.
- **Create Album**: Users can add new albums by specifying an album name and description.
- **Update Album**: Users can update the name and description of existing albums.
- **Delete Album**: Users can delete an album along with all its photos.

### Photo Management
- **Upload Photos**: Users can upload photos to a specific album.
- **Edit Photos**: Users can update the name and description of the photos they have uploaded.
- **Delete Photos**: Users can delete photos from their albums.
- **View Photos**: Photos within an album are displayed in a grid layout. Users can click on individual photos to view them in more detail.
- **Download Photos**: Users can download photos to their local computer.
- **Thumbnail Display**: Photos are displayed as thumbnails in a grid format, providing an intuitive and responsive user experience.

### Additional Pages
- **About Page**: A static page that provides information about the application.

## Technologies Used
- **React.js**: JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For handling navigation between different pages of the application.
- **JWT Authentication**: Used for secure login and user session management.
- **Bootstrap**: For responsive design and layout.
- **CSS**: Custom styling for the application's UI.
- **HTML**: Used for structuring and presenting content on the web.

## Template Source

This project is heavily customized based on the **mantis-free-react-admin-template**. You can find the original template here:

- [mantis-free-react-admin-template](https://github.com/codedthemes/mantis-free-react-admin-template)

## How to Run

1. Clone the repository.
2. Navigate into the project directory.
3. Install dependencies: `npm install --force` (if you encounter an error indicating that `react-scripts` is not recognized, run `npm install react-scripts --save` as well).
4. Start the development server: `npm start`.

   The application will run on `http://localhost:3000` by default.

5. **Ensure the backend service is running concurrently for the application to function correctly.** For detailed instructions on running the backend, please refer to [this repository](https://github.com/gunsugunaydin/Photo-Album-Management-API).

## Backend Changes (Important!)
- Included `@CrossOrigin` to my controllers with the following line of code:
  
  ```java
  @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowedHeaders = "*") //This allows all controllers to accept requests from the specified origin.
  
- Added a `HomeController` for testing purposes (Not important 🤷‍♀️, but it still counts as a change).



Please feel free to explore the code and share your feedback. I am always open to suggestions and collaboration. Happy coding!

<img src="https://media.tenor.com/QbsVdi4RPTUAAAAj/cat-cute.gif" alt="Get in Touch Gif" width="50" height="50"> Get in Touch:

- **Email**: [gunsugunay98@gmail.com](mailto:gunsugunay98@gmail.com)
- **LinkedIn**: [linkedin.com/in/gunsugunaydin](https://www.linkedin.com/in/gunsugunaydin/)

