import React from 'react';
import './ExploreContainer.css';

import { IonButton, IonInput } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <IonInput autofocus placeholder="placeholdin" />
      <IonButton>PRESS ME</IonButton>
    </div>
  );
};

export default ExploreContainer;
