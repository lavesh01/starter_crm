const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Address",
      content: (
        <p>647/2A, vashishtpuram, Jankipuram Extension, Lucknow, 226021, India.</p>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Customer Care No.",
      content: (
        <>
          <p>+91-8542951004</p>
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
          <p>sales@eurasiaglobal.net</p>
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
