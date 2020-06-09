import React, { useState, useEffect, useRef } from "react";
import { BASE_URL, headers } from "../../constants/api";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import BackToTop from "../layout/other/BackToTop";
import MainHeader from "../layout/headers/MainHeader";
import SubHeader from "../layout/headers/SubHeader";
import { Link } from "react-router-dom";
import Search from "./search/Search";
import AccomodationItem from "./AccomodationItem";

function Accomodations() {
  const refA = useRef(null);

  function scrollToSection(ref) {
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
  }

  const [establishments, setEstablishments] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const url = BASE_URL + "establishments";
  const options = { headers };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setEstablishments(json);
        setFilteredResults(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearch(inputValue) {
    const lowerCaseInput = inputValue.toLowerCase();
    const filteredArray = establishments.filter(function (establishments) {
      const lowercaseName = establishments.name.toLowerCase();

      if (lowercaseName.startsWith(lowerCaseInput)) {
        return true;
      } else {
        return false;
      }
    });

    setFilteredResults(filteredArray);
  }

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="grow" className="spinner " />;
      </div>
    );
  }

  function noResults() {
    if (filteredResults.length === 0) {
      return (
        <>
          <div className="search__no-results">Your search gave no results</div>
        </>
      );
    }
  }

  return (
    <>
      <div
        className="header-image header-image--accomodations"
        aria-label="image of Bergen in the night"
      >
        <div className="header-image__text-box header-image__text-box--dark">
          <MainHeader title="Hotel? B&B? Apartment?" />

          <div className="header-image__btn header-image__btn--pink">
            <Link onClick={() => scrollToSection(refA)}>Take a look!</Link>
          </div>
        </div>
      </div>
      <div className="main-container main-container--dark-pink">
        <Container>
          <Row>
            <Col className="col-sm-12">
              <div className="text-content text-content--light">
                <MainHeader title="Experience Bergen" />
                <SubHeader title="Gateway to the Fjords" />
                <p>
                  Est nulla non do magna et consectetur elit aliquip eu aliqua
                  reprehenderit tempor. Pariatur ullamco incididunt sunt sit
                  ipsum velit ex ut ipsum irure. Mollit officia cillum Lorem
                  exercitation ad in non. Commodo reprehenderit consectetur
                  laborum nisi eiusmod esse minim quis laborum exercitation
                  tempor dolor reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
          <div id="tag1">
            <section ref={refA} />
          </div>

          <Search doSearch={handleSearch} />
          {noResults()}
          <Row>
            {filteredResults.map(function (establishments) {
              const {
                id,
                name,
                image,
                price,
                description,
                maxGuests,
              } = establishments;
              return (
                <AccomodationItem
                  key={establishments.id}
                  id={id}
                  name={name}
                  image={image}
                  price={price}
                  maxGuests={maxGuests}
                  description={description}
                />
              );
            })}
          </Row>
        </Container>
      </div>
      <BackToTop />
    </>
  );
}

export default Accomodations;
