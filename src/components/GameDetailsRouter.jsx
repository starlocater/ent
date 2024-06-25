import React, { Suspense, useMemo } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

const GameDetailsRouter = () => {
  const { gameName } = useParams();
  const GameDetailsPage = useMemo(() => React.lazy(() => import(`../pages/gamedetails/${gameName}.jsx`)), [gameName]);

  return (
    <div className="pt-32 w-screen h-screen overflow-y-scroll no-scrollbar bg-black">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<GameDetailsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default GameDetailsRouter;