"use client";
import styles from "./style.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { useState } from "react";

const ServiceSingleFAQAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className={`${styles.bgDiv}`}>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 100 } }}
        sx={{
          "& .MuiAccordion-region": {
            height: expanded ? "auto" : 0,
          },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ fontSize: "30px", backgroundColor: "#F5F5F5" }}
        >
          <Typography style={{ color: "#181818", fontWeight: "600" }}>
            What will happen when I’ve sent my application?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#F5F5F5" }}>
          <Typography
            style={{
              backgroundColor: "#F5F5F5",
              color: "#595566",
              fontWeight: "400",
            }}
          >
            Ippsum is the result of synergy between our teams and our customers.
            Our company culture is focused on excellent productivity, customer
            satisfaction, respect for team and individual achievements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{ fontSize: "30px", backgroundColor: "#F5F5F5" }}
        >
          <Typography style={{ color: "#181818", fontWeight: "600" }}>
            Can I get a free trial before I purchase?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#F5F5F5" }}>
          <Typography
            style={{
              backgroundColor: "#F5F5F5",
              color: "#595566",
              fontWeight: "400",
            }}
          >
            Ippsum is the result of synergy between our teams and our customers.
            Our company culture is focused on excellent productivity, customer
            satisfaction, respect for team and individual achievements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel2-content"
          id="panel3-header"
          style={{ fontSize: "30px", backgroundColor: "#F5F5F5" }}
        >
          <Typography style={{ color: "#181818", fontWeight: "600" }}>
            What should I include in my personal statement?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#F5F5F5" }}>
          <Typography
            style={{
              backgroundColor: "#F5F5F5",
              color: "#595566",
              fontWeight: "400",
            }}
          >
            Ippsum is the result of synergy between our teams and our customers.
            Our company culture is focused on excellent productivity, customer
            satisfaction, respect for team and individual achievements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel2-content"
          id="panel4-header"
          style={{ fontSize: "30px", backgroundColor: "#F5F5F5" }}
        >
          <Typography style={{ color: "#181818", fontWeight: "600" }}>
            Will membership plans be charged automatically?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#F5F5F5" }}>
          <Typography
            style={{
              backgroundColor: "#F5F5F5",
              color: "#595566",
              fontWeight: "400",
            }}
          >
            Ippsum is the result of synergy between our teams and our customers.
            Our company culture is focused on excellent productivity, customer
            satisfaction, respect for team and individual achievements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel2-content"
          id="panel5-header"
          style={{ fontSize: "30px", backgroundColor: "#F5F5F5" }}
        >
          <Typography style={{ color: "#181818", fontWeight: "600" }}>
            What will happen when I’ve sent my application?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#F5F5F5" }}>
          <Typography
            style={{
              backgroundColor: "#F5F5F5",
              color: "#595566",
              fontWeight: "400",
            }}
          >
            Ippsum is the result of synergy between our teams and our customers.
            Our company culture is focused on excellent productivity, customer
            satisfaction, respect for team and individual achievements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel2-content"
          id="panel6-header"
          style={{ fontSize: "30px", backgroundColor: "#F5F5F5" }}
        >
          <Typography style={{ color: "#181818", fontWeight: "600" }}>
            Can I get a free trial before I purchase?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#F5F5F5" }}>
          <Typography
            style={{
              backgroundColor: "#F5F5F5",
              color: "#595566",
              fontWeight: "400",
            }}
          >
            Ippsum is the result of synergy between our teams and our customers.
            Our company culture is focused on excellent productivity, customer
            satisfaction, respect for team and individual achievements.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ServiceSingleFAQAccordion;
