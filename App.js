
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from "@rnmapbox/maps"

MapboxGL.setAccessToken("sk.eyJ1IjoiY3Jpc3RpYW52ZWdhIiwiYSI6ImNsMnV1cTYycjA1OWIzcG80YWs1OGM0MTYifQ.VEMvWOqoolXB9zbieBzusg");
MapboxGL.setConnected(true);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});

export default class App extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  }
}
