// Section.js
import { useState, useEffect } from "react";
import ScrollableSection from "@/components/Commons/ScrollableSection";
import { LoadingSkeleton } from "../Loaders/LoadingSkeleton";

const fetchSectionData = async (query) => {
  const response = await fetch(`/api/games?query=${query}`);
  const data = await response.json();
  return data;
};

export const Section = ({ id, title, subtitle, seeAllHref, query }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchSectionData(query);
      setItems(data);
      setLoading(false);
    };
    getData();
  }, [query]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <ScrollableSection
      id={id}
      title={title}
      subtitle={subtitle}
      seeAllHref={seeAllHref}
      items={items}
    />
  );
};