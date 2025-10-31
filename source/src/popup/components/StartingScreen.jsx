import React from 'react';

const StartingScreen = ({ notYoutube }) => {
  return (
    <div className="start-screen flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center gap-2 border-b pb-2 border-[#80808056]">
        <img src="/icon.png" alt="LectureSnap Logo" width={40} />
        <p style={{ fontFamily: 'Oswald' }} className="text-xl">LectureSnap</p>
      </div>
      {notYoutube && (
        <p className="font-semibold my-3">
          Kindly visit a <a target="_blank" rel="noreferrer" className="text-blue-800" href="https://www.youtube.com">Youtube</a> video to start taking notes
        </p>
      )}
    </div>
  );
};

export default StartingScreen;
