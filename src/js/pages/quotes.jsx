import React from 'react';
import styled from 'styled-components';
import Page from '../components/page.jsx';

const Headline = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 3em;
`;

const SubHeadline = styled.h3`
  color: "#c28159"
`;

const Quotes = () => (
  <Page>
    <div className="center mw7 mw8-ns ph3-ns pb4">
      <Headline className="tc gray">Thoughts</Headline>

      <SubHeadline className="gray tc">Thoughts from others as they find me.</SubHeadline>

      <blockquote className="gray">
      But movements of people committed to the truth did not give up. They
      kept believing and building on the conviction that the moral arc of
      the universe bends toward justice. And they uncovered the lies that
      crippled democracy in their day. Our present moral crisis demands
      nothing less of us.
      </blockquote>
      <div className="silver tr">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.theguardian.com/commentisfree/2020/jan/31/impeachment-trial-our-democracy-is-fragile-black-americans"
          title="Reverend William Barber"
          className="link silver"
        >
        Reverend William Barber
        </a>
      </div>

      <blockquote className="gray">
      Equitably sharing wealth could improve peoples’ lives without
      plundering the Earth’s resources. Fairness could be an antidote to the
      imperative of growth.
      </blockquote>
      <div className="silver tr">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.newstatesman.com/politics/environment/2019/12/europes-green-deal-tepid-response-climate-crisis"
          title="Riccardo Mastini et al"
          className="link silver"
        >
        Riccardo Mastini, Giorgos Kallis and Jason Hickel
        </a>
      </div>

      <blockquote className="gray">
      Western colonial society essentially trains us to be disconnected from
      the planet. It doesn’t predispose us to go and live directly in
      relationship with the Earth. We don’t have to go to a stream to go get
      our water. We don’t have to go hunt or grow our food if we don’t want
      to. It’s the opposite of indigenous lifestyle, traditionally. So
      that’s why I believe the fundamental cause of climate disruption is
      our inherent disconnect from the planet. … And the solution is first,
      we have to start with reconnecting.
      </blockquote>
      <div className="silver tr">
        Dahr Jamail
      </div>

      <blockquote className="gray">
      Knowing about the climate disaster distills a fear. There’s a panic.
      There’s a fight or flight. Where do I go? I can’t go anywhere. This is
      our only planet and so all those feelings and that grief that comes
      up, you’re going to get to deal with that.  And so if this is what’s
      happening to our very planet, then there’s going to be an ongoing
      dance with grief that comes up of sadness, of rage at the people
      responsible, of this kind of internal schizophrenia of, “Yeah, and I
      still drive, etc.” All of us living embedded in this Western
      civilization, that’s a dance that we all get to contend with on a
      daily basis if we really start to tease out our own feelings.
      </blockquote>
      <div className="silver tr">
        Dahr Jamail
      </div>

      <blockquote className="gray">
      Our governments are helping propel us towards a catastrophe on a scale
      humankind has never encountered before: the collapse of our
      life-support systems. It does so in support of certain ideologies –
      consumerism, neoliberalism, capitalism – and on behalf of powerful
      industries.
      </blockquote>
      <div className="silver tr">
        George Monbiot
      </div>

      <blockquote className="gray">
      Hope is not the conviction that something will turn out well but the
      certainty that something is worth doing no matter how it turns out.
      </blockquote>
      <div className="silver tr">
        Vaclav Havel
      </div>

      <blockquote className="gray">
      We’re all born onto the planet with obligations.
      </blockquote>
      <div className="silver tr">
        Indigenous philosphy
      </div>
    </div>
  </Page>
);

export default Quotes;
