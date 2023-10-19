const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Customer Care No.",
      action: "tel:+(91) 8542951004",
      text: "+91-8542951004",
    },
    {
      id: 2,
      title: "Email",
      action: "sales@eurasiaglobal.net",
      text: "sales@eurasiaglobal.net",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
