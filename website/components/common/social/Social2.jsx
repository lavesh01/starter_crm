const Social2 = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://facebok.com/", ariaLabel: "Facebook" },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/", ariaLabel: "Twitter" },
    { id: 3, icon: "icon-instagram", link: "https://www.instagram.com/eurasia_global_dmc", ariaLabel: "Instagram" },
    { id: 4, icon: "icon-linkedin", link: "https://linkedin.com/", ariaLabel: "Linkedin" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          aria-label={item.ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-center size-40 rounded-full"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social2;
