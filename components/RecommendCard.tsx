const RecommendCard = () => {
  return (
    <section className="bg-yellow order-1 lg:order-2 bg-[right_-2rem_bottom_-2.2rem] hover:bg-opacity-90 lg:w-96 cursor-pointer transition-opacity duration-200 bg-no-repeat rounded-md p-8 bg-[url('/static/img/curious-girl.png')]">
      <h1 className='text-dark-primary font-bold text-2xl leading-6'>
        Recommend me<span className='block'>a recipe</span>
      </h1>
    </section>
  );
};
export default RecommendCard;
