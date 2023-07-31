#  🖼️ Image Uploader to AWS S3

Image Uploader to S3 is a web application built using React and Node.js that allows users to upload images to an Amazon S3 bucket. The application provides a user interface for selecting and uploading images, and displays a gallery of all uploaded images.

📌The frontend of the application is built using React and Chakra UI, and allows users to select and upload images in JPG or PNG format. The application uses a custom hook to communicate with the backend API built using Node.js and Express.js.

📌The backend API is responsible for authenticating users and generating pre-signed URLs for uploading images to the S3 bucket. It uses AWS SDK for Node.js to communicate with the S3 bucket and generate pre-signed URLs. The API also provides endpoints for retrieving all images uploaded by a user, deleting an image, and updating the metadata of an image.

⚙️ Steps

Clone the repository

Install dependencies

Set up environment variable

Start the backend server: npm run dev

Start the frontend server: npm start

Open the application: Open a web browser and navigate to http://localhost:3000 to access the application.

Note: This is a general overview of the steps required to clone and work with the Image Uploader to S3 project. The exact steps may vary depending on your development environment and setup.

👀 Screenshots

Frontend
![Screenshot (94)](https://github.com/rishul25/YTS-Image-Uploader/assets/85450019/cc76a1bf-07cc-476e-8c75-b26c46918b20)


AWS S3 Bucket
![Screenshot (92)](https://github.com/rishul25/YTS-Image-Uploader/assets/85450019/ba12ef27-c598-45d4-9896-a15d772b799a)
