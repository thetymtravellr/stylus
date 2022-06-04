import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <section className="min-h-screen ">
      <div className="py-20 bg-gray-200 px-4">
        <div className="flex flex-col md:flex-row space-x-8 w-full max-w-6xl mx-auto text-black">
        <article className="text-sm w-full md:w-1/2">
          <h3 className="uppercase mb-5 adiHaus tracking-widest ">
            <strong>
              STORIES, STYLE, AND SPORTING GOODS AT ADIDAS, SINCE 1949
            </strong>
          </h3>
          <p className="font-light ">
            Through sports, we have the power to change lives. Sports keep us
            fit. They keep us mindful. They bring us together. Athletes inspire
            us. They help us to get up and get moving. And sporting goods
            featuring the latest technologies help us beat our personal best.
            adidas is home to the runner, the basketball player, the soccer kid,
            the fitness enthusiast, the yogi. And even the weekend hiker looking
            to escape the city. The 3-Stripes are everywhere and anywhere. In
            sports. In music. On life’s stages. Before the whistle blows, during
            the race, and at the finish line. We’re here to support creators. To
            improve their game. To live their lives. And to change the world.
            <br />
            <br />
            adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sporting goods, style and clothing that match the athletic
            needs, while keeping sustainability in mind. We’re here to support
            creators. Improve their game. Create change. And we think about the
            impact we have on our world.
          </p>
        </article>
        <article className="text-sm w-full md:w-1/2">
          <h3 className="uppercase mb-5 adiHaus tracking-widest">
            <strong>WORKOUT CLOTHES, FOR ANY SPORT</strong>
          </h3>
          <p className="font-light">
            adidas designs for athletes of all kinds. Creators who love to
            change the game. People who challenge conventions, break the rules,
            and define new ones. Then break them all over again. We design
            sports apparel that gets you moving, winning, and living life to the
            fullest. We create bras and tights for female athletes who play just
            as hard as the men. From low to high support. Maximum comfort. We
            design, innovate and iterate. We test new technologies in action. On
            the field, the track, the court, and in the pool. We’re inspired by
            retro workout clothes, creating new streetwear essentials. From NMD
            and Ozweego to our Firebird tracksuits. From Stan Smith to
            Superstar. Classic sports models are brought back to life on the
            streets and the stages around the world. 
            <br />
            <br />
            Through our collections we
            blur the borders between high fashion and high performance. Like our
            adidas by Stella McCartney athletic clothing collection – designed
            to look the part inside and outside of the gym. Or some of our
            adidas Originals lifestyle pieces, that can be worn as sports
            apparel too. Our lives are constantly changing. Becoming more and
            more versatile. And adidas designs with that in mind.
          </p>
        </article>
        </div>
      </div>
      <div className="bg-[#ede734] flex justify-center items-center space-x-4 py-8">
       <div className="">
       <h1 className="uppercase text-black text-3xl font-extrabold max-w-md font-poppins">JOIN OUR STYLUSCLUB & GET 15% OFF</h1>
       </div>
      <div className="max-w-md">
      <Link to='/' className="uppercase bg-black text-white text-sm font-bold px-6 py-3 flex items-center hover:text-gray-400 duration-150">SIGN UP FOR FREE <ArrowNarrowRightIcon className="w-8 ml-4"/></Link>
      </div>
      </div>
    </section>
  );
};

export default Article;
