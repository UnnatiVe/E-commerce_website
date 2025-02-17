import React, { useState } from "react";
import CommentBox from "./Comment";
import StarRating from "./StarRating";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  const handleRatingSubmit = (value) => {
    setRating(value);
  };

  const handleImageUpload = (file) => {
    setUploadedImage(file);
  };

  return (
    <div className="flex flex-col items-center w-3/4 m-auto mt-10 mb-10">
      <div className="flex flex-row justify-left w-full my-3 ">
        <div
          className={`border-2 p-3 cursor-pointer ${
            activeTab === "description" ? "bg-gray-300" : ""
          }`}
          onClick={() => handleTabClick("description")}
        >
          Description
        </div>
        <div
          className={`border-2 p-3 cursor-pointer ${
            activeTab === "reviews" ? "bg-gray-300" : ""
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews ({comments.length})
        </div>
      </div>
      {activeTab === "description" && (
        <div className="flex flex-row justify-left w-full mt-3 ">
          <p className="border-2 p-3">
          ShopEase Online is your premier destination for seamless online shopping experiences. We pride ourselves on offering an extensive selection of products that cater to every lifestyle and preference. Whether you're searching for the latest fashion trends, top-notch electronics, essential home goods, or unique gifts, ShOpEase Online provides a diverse array to meet your needs. Our user-friendly interface ensures effortless navigation, allowing you to browse, select, and purchase items with ease. 
          </p>
        </div>
      )}
      {activeTab === "reviews" && (
        <div className="flex flex-col w-full h-auto mt-3">
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <CommentBox
              onCommentSubmit={handleCommentSubmit}
              onRatingSubmit={handleRatingSubmit}
              onImageUpload={handleImageUpload}
            />
          </div>
          <div className=" bg-grey-500 p-4 rounded-md">
            <StarRating rating={rating }/>
            <div>
              <h3>Comments:</h3>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
            {uploadedImage && (
              <div>
                <h3>Uploaded Image:</h3>
                <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionBox;
