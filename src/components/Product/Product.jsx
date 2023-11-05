import football from '../../assets/img/football.jpg';
// import { AiTwotoneStar } from 'react-icons/ai';
import Card from '../card/Card';
function Product() {
  return (
    <>
      <div className="bg-[#F1F1F1] ">
        <div className="Products bg-[#F1F1F1]   py-[2rem] container mx-auto">
          <div className="product-heading font-semibold text-center text-[30px] p-[1rem] text-black">
            Trending Products
          </div>
          <div className="grid  justify-center gap-[3rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-[2rem]">
            <Card
              title="Ruffle leather ajcket"
              desc="lorem si the sis sowis sjwid djwni"
              price="300"
              img={football}
            />
            <Card
              title="Ruffle leather ajcket"
              desc="lorem si the sis sowis sjwid djwni"
              price="300"
              img={football}
            />
            <Card
              title="Ruffle leather ajcket"
              desc="lorem si the sis sowis sjwid djwni"
              price="300"
              img={football}
            />
            <Card
              title="Ruffle leather ajcket"
              desc="lorem si the sis sowis sjwid djwni"
              price="300"
              img={football}
            />
            <Card
              title="Ruffle leather ajcket"
              desc="lorem si the sis sowis sjwid djwni"
              price="300"
              img={football}
            />
            <Card
              title="Ruffle leather ajcket"
              desc="lorem si the sis sowis sjwid djwni"
              price="300"
              img={football}
            />
            <Card
              title="Ruffle leather ajcket"
              desc="lorem si the sis sowis sjwid djwni"
              price="300"
              img={football}
            />
            <Card
              title="Ruffle leather ajcket"
              desc="lorem si the sis sowis sjwid djwni"
              price="300"
              img={football}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
