"use client";
import React, { useEffect, useState } from "react";
import { slugify } from "@/helpers";
//@ts-ignore
import { Link, Element } from "react-scroll";

function extractHeadersFromChildren(childs: React.ReactNode) {
  const headers: { level: number; text: string; id: string }[] = [];

  function extractHeaders(node: React.ReactNode) {
    if (React.isValidElement(node)) {
      if (node.props.children) {
        React.Children.forEach(node.props.children, extractHeaders);
      }

      if (node.type === "h1" || node.type === "h2" || node.type === "h3") {
        headers.push({
          level: parseInt(node.type[1]),
          text: node.props.children,
          id: node?.props?.id ?? "",
        });
      }
    }
  }

  React.Children.forEach(childs, extractHeaders);

  return headers;
}

function extractHeadersFromHtml(html: string) {
  const headers: { level: number; text: string; id: string }[] = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  doc.querySelectorAll("h1, h2, h3").forEach((header) => {
    headers.push({
      level: parseInt(header.tagName[1]),
      text: header.textContent || "",
      id: slugify(header.textContent ?? "") || "",
    });
  });

  return headers;
}

export default function HeadersFromChildren(props: {
  childs: React.ReactNode;
  html?: string;
}) {
  const { childs, html } = props;

  const [headers, setHeaders] = useState<
    { level: number; text: string; id: string }[]
  >([]);

  useEffect(() => {
    if (html) {
      const extractedHeaders = extractHeadersFromHtml(html);
      setHeaders(extractedHeaders);
    } else {
      const extractedHeaders = extractHeadersFromChildren(childs);
      setHeaders(extractedHeaders);
    }
  }, [childs, html]);

  return (
    <>
      {headers.map((heading, index) => (
        <Link
          key={index}
          smooth={true}
          to={heading ? heading.id : ""}
          href={heading ? `#${heading.id}` : ""}
          offset={-100}
          className="text-primary-600 font-medium block hover:text-accent-300 truncate"
        >
          {heading.text.replace(":", "")}
        </Link>
      ))}
    </>
  );
}
