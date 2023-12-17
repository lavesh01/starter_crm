const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Customer Care No.",
      text: "+91-8542951004",
    },
    {
      id: 2,
      title: "Email",
      text: "sales@eurasiaglobal.net",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <p className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </p>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
