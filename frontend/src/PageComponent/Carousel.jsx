// import carousel1 from "../images/carousel_1.png";

// const Carousel = () => {
//   return (
//     <div
//       id="carouselExampleCaptions"
//       class="carousel slide"
//       data-bs-ride="false"
//     >
//       <div class="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="0"
//           class="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="1"
//           aria-label="Slide 2"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="2"
//           aria-label="Slide 3"
//         ></button>
//       </div>
//       <div class="carousel-inner">
//         <div class="carousel-item active">
//           <img src={carousel1} class="d-block w-100" alt="..." />
//         </div>
//         <div class="carousel-item">
//           <img src={carousel1} class="d-block w-100" alt="..." />
//         </div>
//         <div class="carousel-item">
//           <img src={carousel1} class="d-block w-100" alt="..." />
//         </div>
//       </div>
//       <button
//         class="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="prev"
//       >
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//       </button>
//       <button
//         class="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="next"
//       >
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;

// import carousel1 from "../images/carousel_1.png";
// import carousel2 from "../images/carousel_2.png";
// import carousel3 from "../images/carousel_3.png";

// const Carousel = () => {
//   return (
//     <div
//       id="carouselExampleCaptions"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="0"
//           className="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="1"
//           aria-label="Slide 2"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="2"
//           aria-label="Slide 3"
//         ></button>
//       </div>
//       <div className="carousel-inner">
//         <div className="carousel-item active" data-bs-interval="3000">
//           <img src={carousel1} className="d-block w-100" alt="Slide 1" />
//         </div>
//         <div className="carousel-item" data-bs-interval="3000">
//           <img src={carousel2} className="d-block w-100" alt="Slide 2" />
//         </div>
//         <div className="carousel-item" data-bs-interval="3000">
//           <img src={carousel3} className="d-block w-100" alt="Slide 3" />
//         </div>
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import carousel1 from "../images/carousel_1.png";
import carousel2 from "../images/carousel_2.png";
import carousel3 from "../images/carousel_3.png";

const Carousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // sets interval globally
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;



