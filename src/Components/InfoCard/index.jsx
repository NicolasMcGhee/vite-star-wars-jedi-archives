import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import "./index.css";
import { Link } from "react-router";

export default function InfoCard(props) {
  return (
    <Card className={`w-full max-w-[48rem] flex-row gap-4 InfoCard-Container border-4 ${props.type == "warrior" ? "blue" : props.type == "force" ? "green" : props.type == "sith" ? "red" : ""}`}>
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={props.pic}
          alt={props.altDescription}
          className="infoCard-Image"
        />
      </CardHeader>
      <CardBody className="flex flex-col Infocard-Body">
        <section className="Infocard-Heading">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            <Link to={`/jedi/${props.id}`}>{props.name}</Link>
            
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {props.ranking}
          </Typography>

          <Typography color="gray" className="mb-8 font-normal infoCard-Paragraph">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
        </section>
        <section>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </section>
      </CardBody>
    </Card>
  );
}
