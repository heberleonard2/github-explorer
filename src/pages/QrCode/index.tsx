/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import QrReader from 'react-qr-scanner';

const QrCode: React.FC = () => {
  return (
    <QrReader
      style={{ width: '100%', height: 500 }}
      onError={(err: any) => {
        console.log(err);
      }}
      onScan={(scan?: { text: string }) => {
        if (scan && scan.text) {
          alert(scan.text);
        }
      }}
    />
  );
};

export default QrCode;
