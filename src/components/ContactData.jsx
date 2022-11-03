import styled from "styled-components";
import { Instagram, MailOutline, Phone, Room } from "@material-ui/icons";
import { devices } from "../consts/deviceSizes";

const Title2 = styled.h1`
  margin: 20px 0px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  color: whitesmoke;
  text-shadow: 2px 1px 4px rgba(66, 68, 90, 1);
  font-size: 14px;
  @media ${devices.tablet} {
    font-size: 18px;
  }
`;
const ContactItem = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  color: whitesmoke;
  text-shadow: 2px 1px 4px rgba(66, 68, 90, 1);
  cursor: pointer;
`;

const ContactData = ({ styleTitle, styleText, styleIcon }) => {
  return (
    <div>
      <Title2 style={styleTitle}>KONTAKT</Title2>
      <a
        href="https://goo.gl/maps/W8YJKjLWJbHfjNbHA"
        target="_blank"
        rel="noreferrer"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ContactItem style={styleText}>
          <Room style={{ marginRight: "10px", ...styleIcon }} />
          Bielsko-Biała, Polska
        </ContactItem>
      </a>
      <ContactItem style={styleText}>
        <Phone style={{ marginRight: "10px", ...styleIcon }} />
        +48 883 172 180
      </ContactItem>
      <ContactItem style={styleText}>
        <MailOutline style={{ marginRight: "10px", ...styleIcon }} />
        irenas@handmade.com
      </ContactItem>
      <a
        href="https://www.instagram.com/irena_handmade_projects/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR3m9wvz7bawE0DZsltbLSNhH0_ryIT6pF9RtKdbxHbQNhL5LINKN7lqNnw"
        target="_blank"
        rel="noreferrer"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ContactItem style={styleText}>
          <Instagram style={{ marginRight: "10px", ...styleIcon }} />
          Sosialmedia
        </ContactItem>
      </a>
    </div>
  );
};

export default ContactData;
