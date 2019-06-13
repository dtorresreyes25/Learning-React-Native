import React from "react";
import { SectionList, Text, View } from "react-native";
import PropTypes from "prop-types";
import Row from "./row";

const ContactsList = props => {
  const contactByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0];
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact]
    };
  }, {});

  const sections = Object.keys(contactByLetter)
    .sort()
    .map(letter => ({
      title: letter,
      data: contactByLetter[letter]
    }));
  return (
    <SectionList
      renderItem={({ item }) => <Row {...item} />}
      renderSectionHeader={obj => <Text>{obj.section.title}</Text>}
      sections={sections}
    />
  );
};

ContactsList.propTypes = {
  sections: PropTypes.array
};

export default ContactsList;
