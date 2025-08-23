import React from 'react';
import ScrollableSection from '../Commons/ScrollableSection';

function Dashboard() {
  return (
    <ScrollableSection
      id="mobile-games"
      title="MOBILE GAMES"
      subtitle="Top-ups and vouchers"
      seeAllHref="/games"
      items={[
        { title: "FREE FIRE", price: "$4.99", imageUrl: "/img/freefire-1.jpg", tag: "1CS BONUS" },
        { title: "FREE FIRE", price: "$10.99", imageUrl: "/img/freefire-2.jpg" },
        { title: "MOBILE LEGENDS", price: "$4.99", imageUrl: "/img/ml-1.jpg" },
        { title: "MOBILE LEGENDS", price: "$0.99", imageUrl: "/img/ml-2.jpg" },
        { title: "STEAM", price: "$9.99", imageUrl: "/img/steam.jpg" },
      ]}
    />
  );
}

export default Dashboard;