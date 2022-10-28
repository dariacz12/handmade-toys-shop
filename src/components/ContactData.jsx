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
      <ContactItem style={styleText}>
        <Room style={({ marginRight: "10px" }, styleIcon)} />
        Bielsko-Biała, Polska
      </ContactItem>
      <ContactItem style={styleText}>
        <Phone style={({ marginRight: "10px" }, styleIcon)} />
        +48 883 172 180
      </ContactItem>
      <ContactItem style={styleText}>
        <MailOutline style={({ marginRight: "10px" }, styleIcon)} />
        irenas@handmade.com
      </ContactItem>
      <ContactItem style={styleText}>
        <Instagram style={({ marginRight: "10px" }, styleIcon)} />
        Sosialmedia
      </ContactItem>
    </div>
  );
};

export default ContactData;
