const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Address",
      content: (
        <>647/2A, vashishtpuram, Jankipuram Extension, Lucknow, 226021, India.</>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Customer Care No.",
      content: (
        <>
          <a href="tel:+4733378901">+91-8542951004</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "email",
      content: (
        <>
          {" "}
          <a href="mailto:i@gotrip.com">sales@eurasiaglobal.net</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
