import React, {Component} from 'react';
import {
  Container,
  Card,
  CardItem,
  StyleProvider,
  Header,
  Title,
  Content,
  Button,
  Right,
  Body,
  Text,
} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import '../../GlobalDefinitions';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import ajax from '../../ajax';
import GlobalDefinitions from '../../GlobalDefinitions';

export default class Strategies extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Body
              // eslint-disable-next-line react-native/no-inline-styles
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Title>Options</Title>
            </Body>
          </Header>
          <Content>
            <Card>
              <CardItem>
                <Text>Google Account</Text>
                <Right>
                  <Button hasText onPress={ajax.signOut}>
                    <Text>Switch User</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Text>
                  The Red Alliance App — v{GlobalDefinitions.data.version}
                </Text>
              </CardItem>
              <CardItem>
                <Text>Made with ❤️ by Titan Scouting</Text>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
