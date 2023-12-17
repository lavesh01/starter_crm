const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Address",
      text: "647/2A, vashishtpuram, Jankipuram Extension, Lucknow, 226021, India.",
    },
    {
      id: 2,
      title: "Customer Care No.",
      text: "+91-8542951004",
    },
    {
      id: 3,
      title: "Email",
      text: "sales@eurasiaglobal.net",
    },
  ];
  
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <p className="text-18 fw-500 text-blue-1 mt-3">
            {item.text}
          </p>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
