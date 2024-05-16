const getImage = (imageId) => {
    console.log("imageId");
    return "https://drive.google.com/thumbnail?id=" + imageId + "&sz=w1800";
  };

 export default getImage;