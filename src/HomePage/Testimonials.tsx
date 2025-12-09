import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialItems {
  id: number;
  quote: string;
  image: string;
  name: string;
}

const Items: TestimonialItems[] = [
  {
    id: 1,
    quote:
      " For months I struggled with confusion and spiritual fatigue, feeling disconnected from God’s purpose for my life. But after attending the teachings here, everything changed. The Word became clearer, my prayer life was revived, and I finally understood my identity in Christ. Today, I walk with confidence, peace, and renewed direction. I’m grateful for how God has used this ministry to transform my life completely",
    image: "testimony-image-1svg.svg",
    name: "ilesanmi adedayo john",
  },
  {
    id: 2,
    quote:
      " For months I struggled with confusion and spiritual fatigue, feeling disconnected from God’s purpose for my life. But after attending the teachings here, everything changed. The Word became clearer, my prayer life was revived, and I finally understood my identity in Christ. Today, I walk with confidence, peace, and renewed direction. I’m grateful for how God has used this ministry to transform my life completely",
    image: "testimony-image-1svg.svg",
    name: "ilesanmi adedayo john",
  },
  {
    id: 3,
    quote:
      " For months I struggled with confusion and spiritual fatigue, feeling disconnected from God’s purpose for my life. But after attending the teachings here, everything changed. The Word became clearer, my prayer life was revived, and I finally understood my identity in Christ. Today, I walk with confidence, peace, and renewed direction. I’m grateful for how God has used this ministry to transform my life completely",
    image: "testimony-image-1svg.svg",
    name: "ilesanmi adedayo john",
  },
];
const Testimonials = () => {
  return (
    <div className="w-full pb-60">
      <div className="w-10/12 mx-auto space-y-5 ">
        <h2 className="uppercase font-semibold text-4xl text-transparent bg-linear-to-tr from-[#9B28B0] to-black bg-clip-text text-center ">
          testimony
        </h2>
        <p className="text-center text-xl text-black/70 font-medium">
          Lives are being transformed through the teaching of God’s Word and the
          fellowship we share. In this space, you’ll find real stories from
          people who have experienced growth, clarity, healing, and renewed
          faith through our ministry. Their journeys reflect the power of Christ
          at work in everyday lives—and we believe yours can be next.
        </p>
      </div>

      <Carousel className="w-9/12 mx-auto py-16">
        <CarouselContent>
          {Items.map((item) => (
            <CarouselItem key={item.id}>
              <div className="space-y-5">
                {/* QUOTE */}
                <div className="relative flex items-center justify-center">
                  <p className="quote-text italic font-medium text-2xl text-black/70 text-justify">
                    {item.quote}
                  </p>
                </div>

                {/* IMAGE + NAME */}
                <div className="flex gap-2 items-center justify-between pt-5">
                    {/*  */}
                  <div className="flex gap-2 items-center justify-start pt-5">
                    <div className="w-16 h-16 rounded-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-lg text-black/70 capitalize">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
