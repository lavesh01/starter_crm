import Image from "next/image";

const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "Best Price Guarantee",
      text: "Experience the best rates, always.",
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Easy & Quick Booking",
      text: "Seamless and speedy booking process.",
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Customer Care 24/7",
      text: "Dedicated customer support round the clock.",
      delayAnim: "300",
    },
];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <Image width={70} height={70} src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <strong className="text-18 fw-500">{item.title}</strong>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
