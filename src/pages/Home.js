import React from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";
import Button from "../components/Button";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";
import Social from "../components/Social";
import InvestmentsList from "../components/investments/InvestmentsList";
import { getInvestingPortfolio } from "../api";
import { css, withStyles } from "../withStyles";

const people = [
  {
    name: "einstein",
    description: "View my scientific use of computers.",
    button: "Projects",
    link: "https://github.com/svdorn"
  },
  {
    name: "jobs",
    description: "Examine my entrepreneurial passion.",
    button: "Entrepreneurship",
    link: "#about"
  },
  {
    name: "jfk",
    description: "See how I operate in the free market.",
    button: "Investing",
    link: "#investing"
  }
];

const technologies = [
  { name: "React", img: "/images/tech/react.svg" },
  { name: "Javascript", img: "/images/tech/javascript.png" },
  { name: "Python", img: "/images/tech/python.svg" },
  { name: "AWS", img: "/images/tech/aws.svg" },
  { name: "GitHub", img: "/images/tech/github.svg" },
  { name: "HTML", img: "/images/tech/html.svg" },
  { name: "Docker", img: "/images/tech/docker.svg" }
];

const orfiumChips = ["Python", "Pandas", "AWS", "Snowflake", "Data Science", "Tableau"];

const moonshotChips = [
  "React",
  "Node",
  "Express.js",
  "MongoDB",
  "AWS",
  "HTML",
  "CSS"
];

const moonshotLearningChips = ["React", "AWS", "JavaScript", "HTML", "CSS"];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      investments: []
    };
  }

  componentDidMount() {
    // strings that show up in the typer
    const typedStrings = [
      "Hello, World!",
      "my name is <b>Stephen Dorn</b>",
      "i am a computer scientist",
      "crypto and stock market enthusiast",
      "and entrepreneur"
    ];

    // options for the typer
    const options = {
      strings: typedStrings,
      typeSpeed: 40,
      backSpeed: 25,
      loop: true,
      loopCount: Infinity,
      backDelay: 1000
    };

    this.setState({ typed: new Typed(this.typedSpan, options) }, () => {
      getInvestingPortfolio()
        .then(res => {
          // console.log(res);

          this.setState({
            investments: res
          });
        })
        .catch(err => console.log("Error getting stock data: ", err));
    });
  }

  typedRef = typedSpan => (this.typedSpan = typedSpan);

  render() {
    const { styles } = this.props;
    const { investments } = this.state;

    return (
      <div {...css(styles.container)}>
        <section {...css(styles.intro)}>
          <div {...css(styles.typed_container)}>
            <img
              src="/images/terminal.svg"
              alt="Terminal"
              {...css(styles.terminal)}
            />
            <span ref={this.typedRef} {...css(styles.typed)} />
          </div>
          <div {...css(styles.icons)}>
            {people.map(icon => (
              <div key={icon.name} {...css(styles.icon)}>
                <div {...css(styles.description)}>{icon.description}</div>
                <img
                  src={`/images/people/${icon.name}.png`}
                  alt={icon.name}
                  {...css(styles.icon_img)}
                />
                <br />
                <div {...css(styles.button)}>
                  <a
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...css(styles.button_link)}
                  >
                    <Button text={icon.button} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div {...css(styles.social)}>
            <Social />
          </div>
        </section>
        <section {...css(styles.entrepreneur)}>
          <div {...css(styles.entrepreneur_orfium)}>
            <div {...css(styles.company_logo_container)}>
              <img
                src="/images/companies/orfium.png"
                alt="Orfium Logo"
                {...css(styles.company_logo)}
              />
            </div>
            <div {...css(styles.left_description)}>
              <h1>Orfium</h1>
              <h3 {...css(styles.company_title)}>Data Analyst</h3>
              <h4 {...css(styles.company_location)}>Malibu, CA</h4>
              <p>
                A music rights management platform offering technology solutions
                for rights-holders.
              </p>
              <div>
                {orfiumChips.map(chip => (
                  <Chip
                    key={`orfiumChips${chip}`}
                    label={chip}
                    {...css(styles.chip)}
                  />
                ))}
              </div>
              <div>
                <a
                  href="https://orfium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...css(styles.company_icon_clickable)}
                >
                  <img
                    src="/images/link.svg"
                    alt="Orfium"
                    {...css(styles.company_icon)}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/orfium/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...css(styles.company_icon_clickable)}
                >
                  <img
                    src="/images/social/linkedin.svg"
                    alt="Orfium LinkedIn"
                    {...css(styles.company_icon)}
                  />
                </a>
              </div>
            </div>
          </div>
          <div {...css(styles.entrepreneur_moonshot)}>
            <div {...css(styles.right_description)}>
              <h1>Moonshot Insights</h1>
              <h3 {...css(styles.company_title)}>Co-founder & CTO</h3>
              <h4 {...css(styles.company_location)}>San Francisco, CA</h4>
              <p>
               Helped companies build their company cultures through hiring.
              </p>
              <div>
                {moonshotChips.map(chip => (
                  <Chip
                    key={`moonshotChip${chip}`}
                    label={chip}
                    {...css(styles.chip)}
                  />
                ))}
              </div>
              <div>
                <a
                  href="https://moonshotinsights.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...css(styles.company_icon_clickable)}
                >
                  <img
                    src="/images/link.svg"
                    alt="Moonshot Insights"
                    {...css(styles.company_icon)}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/18233111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...css(styles.company_icon_clickable)}
                >
                  <img
                    src="/images/social/linkedin.svg"
                    alt="Moonshot Insights LinkedIn"
                    {...css(styles.company_icon)}
                  />
                </a>
              </div>
            </div>
            <div {...css(styles.company_logo_container)}>
              <img
                src="/images/companies/moonshot-insights.png"
                alt="Moonshot Logo"
                {...css(styles.company_logo)}
              />
            </div>
          </div>
          <div {...css(styles.entrepreneur_paws)}>
            <div {...css(styles.company_logo_container)}>
              <img
                src="/images/companies/moonshot-learning.png"
                alt="Moonshot Learning Logo"
                {...css(styles.company_logo_moonshot_learning)}
              />
            </div>
            <div {...css(styles.left_description)}>
              <h1>Moonshot Learning</h1>
              <h3 {...css(styles.company_title)}>
                Co-founder & CTO
              </h3>
              <h4 {...css(styles.company_location)}>Madison, WI</h4>
              <p>
                Common core standardized high school curriculum at the intersection of technology and society.
              </p>
              <div>
                {moonshotLearningChips.map(chip => (
                  <Chip
                    key={`moonshotLearningChip${chip}`}
                    label={chip}
                    {...css(styles.chip)}
                  />
                ))}
              </div>
              <div>
                <a
                  href="http://moonshoteducation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...css(styles.company_icon_clickable)}
                >
                  <img
                    src="/images/link.svg"
                    alt="Moonshot Learning"
                    {...css(styles.company_icon)}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/moonshot-education-and-learning/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...css(styles.company_icon_clickable)}
                >
                  <img
                    src="/images/social/linkedin.svg"
                    alt="Moonshot Learning Linkedin"
                    {...css(styles.company_icon)}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section {...css(styles.tech)}>
          <h1>Some technologies I love working with...</h1>
          <div {...css(styles.tech_list)}>
            {technologies.map(tech => (
              <div key={tech.name} {...css(styles.tech_logo_container)}>
                <img
                  src={tech.img}
                  alt={tech.name}
                  {...css(styles.tech_logo)}
                />
              </div>
            ))}
          </div>
        </section>
        <section {...css(styles.investing)}>
          <h1>Why I Love Investing</h1>
          <p {...css(styles.investing_paragraph)}>
            When I was 15 years old, I first learned about the stock market from
            my Grandpa. That summer, I would go over to his apartment every
            weekend to talk stocks and strategies with him. At 15, I built my
            first trading strategy and began to trade stocks with my own money.
            Since then I{"'"}ve been sharing my love of
            investing with others.
            <br />
            <br />I have a heavy focus on the tech sector
            because that is my area of expertise. I take a passive, long-term
            approach focused on dollar cost averaging into the basket of stocks
             and cryptos that I believe in.
          </p>
          <div {...css(styles.investing_list)}>
            <h2>Some of my favorite investments...</h2>
            <InvestmentsList investments={investments} />
          </div>
        </section>
        <section {...css(styles.contact)}>
          <h1>Contact Me!</h1>
          <p {...css(styles.contact_paragraph)}>
            Please feel free to contact me for any reason, I{"'"}d love to talk!
          </p>
          <div {...css(styles.contact_img_container)}>
            <img
              src="/images/people/einstein.png"
              alt="Stephen Dorn"
              {...css(styles.contact_img)}
            />
          </div>
          <div>
            <Icon {...css(styles.contact_icon)}>email</Icon>{" "}
            stevedorn9@gmail.com
          </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    marginTop: "-80px"
  },
  /* intro section styling */
  intro: {
    backgroundColor: color.primary,
    height: "calc(100vh)",
    minHeight: "600px",
    "@media (max-width: 1000px)": {
      height: "700px"
    },
    "@media (max-width: 500px)": {
      height: "750px"
    }
  },

  typed_container: {
    verticalAlign: "middle",
    paddingTop: "15%",
    fontWeight: "800px",
    fontSize: "44px",
    color: color.white,
    "@media (max-width: 1000px)": {
      paddingTop: "150px",
      fontSize: "32px"
    },
    "@media (max-width: 500px)": {
      paddingTop: "150px",
      fontSize: "25px"
    }
  },

  icons: {
    position: "absolute",
    color: "white",
    bottom: "15%",
    right: "0",
    left: "0",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (max-width: 1000px)": {
      position: "relative",
      paddingTop: "50px",
      bottom: "auto"
    }
  },

  icon: {
    display: "inline-block",
    padding: "0 30px",
    "@media (max-width: 1000px)": {
      padding: "10px 20px"
    }
  },

  icon_img: {
    padding: "10px 0",
    height: "120px",
    "@media (max-width: 1000px)": {
      height: "70px"
    }
  },

  description: {
    fontSize: "18px",
    fontWeight: "600",
    "@media (max-width: 1000px)": {
      fontSize: "15px"
    }
  },

  terminal: {
    display: "inline-block",
    verticalAlign: "middle",
    height: "60px",
    paddingRight: "30px",
    "@media (max-width: 1000px)": {
      height: "45px",
      paddingRight: "15px"
    },
    "@media (max-width: 500px)": {
      height: "30px"
    }
  },

  typed: {
    display: "inline-block",
    verticalAlign: "middle"
  },

  social: {
    position: "absolute",
    bottom: "4%",
    right: "0",
    left: "0",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (max-width: 1000px)": {
      position: "relative",
      bottom: "auto",
      paddingTop: "20px"
    }
  },

  button: {
    display: "block",
    "@media (max-width: 1000px)": {
      display: "none"
    }
  },

  button_link: {
    textDecoration: "none"
  },
  /* entrepreneur styling */
  entrepreneur: {
    padding: "40px 0",
    color: color.black
  },

  entrepreneur_orfium: {
    padding: "30px",
    display: "inline-flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },

  entrepreneur_moonshot: {
    padding: "30px",
    display: "inline-flex",
    justifyContent: "space-around",
    flexWrap: "wrap-reverse"
  },

  entrepreneur_paws: {
    padding: "30px",
    display: "inline-flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },

  company_logo_container: {
    height: "220px",
    width: "220px",
    backgroundColor: color.primary,
    borderRadius: "50%"
  },

  left_description: {
    margin: "auto 0 auto 60px",
    maxWidth: "500px",
    "@media (max-width: 940px)": {
      margin: "auto 30px"
    },
    "@media (max-width: 600px)": {
      margin: "auto 10px"
    }
  },

  right_description: {
    margin: "auto 60px auto 0",
    maxWidth: "500px",
    "@media (max-width: 940px)": {
      margin: "auto 30px"
    },
    "@media (max-width: 600px)": {
      margin: "auto 10px"
    }
  },

  company_title: {
    marginTop: "-17px",
    fontWeight: "600"
  },

  company_location: {
    marginTop: "-14px",
    marginBottom: "10px",
    fontWeight: "600"
  },

  company_logo: {
    paddingTop: "60px",
    height: "100px"
  },

  company_logo_moonshot_learning: {
    paddingTop: "40px",
    height: "140px"
  },

  company_icon_clickable: {
    margin: "0 5px",
    opacity: "0.4",
    ":hover": {
      opacity: "0.6"
    }
  },

  company_icon: {
    height: "34px"
  },

  chip: {
    backgroundColor: color.primary,
    color: color.white,
    margin: "auto 3px 10px 3px"
  },
  /* tech section styling */
  tech: {
    padding: "50px 0 60px",
    backgroundColor: color.primary,
    color: color.primary
  },

  tech_list: {
    padding: "20px 0"
  },

  tech_logo_container: {
    display: "inline-block",
    margin: "10px",
    height: "80px",
    width: "80px",
    backgroundColor: color.primary,
    borderRadius: "50%"
  },

  tech_logo: {
    paddingTop: "15px",
    height: "50px"
  },
  /* investing section styling */
  investing: {
    padding: "60px 0"
  },

  investing_paragraph: {
    margin: "auto",
    width: "92%",
    maxWidth: "800px",
    fontSize: "16px",
    marginBottom: "80px",
    textAlign: "left"
  },

  investing_list: {
    color: color.primary,
    backgroundColor: color.primary,
    padding: "60px 0",
    width: "100%"
  },
  /* contact section styling */
  contact: {
    padding: "20px 0 60px 0"
  },

  contact_paragraph: {
    margin: "auto",
    width: "92%"
  },

  contact_img_container: {
    display: "inline-block",
    margin: "10px",
    height: "130px",
    width: "130px",
    backgroundColor: color.primary,
    borderRadius: "50%"
  },

  contact_img: {
    paddingTop: "15px",
    height: "90px"
  },

  contact_icon: {
    color: color.primary,
    verticalAlign: "middle",
    marginRight: "5px"
  }
}))(Home);
