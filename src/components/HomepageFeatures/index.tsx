import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        O <code>Docs</code> foi projetado para ser facilmente compreendido e apresentar fluxos intuitivos para manter seus colaboradores sempre atualizados a respeito das suas operações
      </>
    ),
  },
  {
    title: 'Foco no que é preciso',
    Svg: require('@site/static/img/produzido_por.svg').default,
    description: (
      <>
        O <code>Docs</code> permite economizar tempo com processos e resoluções de problemas, além de permitir descentralizar tarefas para colaboradores específicos.

Colabore com esta documentação e ajude o time STZ 
      </>
    ),
  },
  {
    title: 'Feito para você ',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Rápido, fácil e intuitivo. <br></br>O seu novo guia de bolso 😉
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
