function Gallery() {
  return (
    <div className="m-10 text-center">
      <h1 className="font-raleway text-3xl sm:text-4xl my-6 font-medium text-center">
        Galeri Foto
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/1.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/2.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/3.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/4.jpg"
            alt="Image Description"
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/5.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/6.jpg"
            alt="Image Description"
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/7.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/8.jpeg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/9.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-[124px] sm:h-44 lg:h-64 object-cover"
            src="./img/gallery/10.jpg"
            alt="Image Description"
          />
        </div>

        <div className="md:hidden lg:block space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/11.JPG"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="./img/gallery/12.jpg"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
