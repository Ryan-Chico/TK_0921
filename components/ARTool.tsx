import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroAmbientLight,
  Viro3DObject,
  ViroNode
} from '@reactvision/react-viro'
import Button from './Button'

function ARScene() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <ViroARScene>
      <ViroAmbientLight color="#FFFFFF" />


      <ViroNode position={[0, -2, -5]} scale={isLoaded ? [1, 1, 1] : [1, 1, 1]}>

        <Viro3DObject
          source={{ uri: 'https://tkp323s.web.app/Puerta_del_Parian_0928170855_texture.glb' }}
          type="GLB"
          onLoadEnd={() => setIsLoaded(true)}

        />
      </ViroNode>

      <ViroNode position={[0, -2, -5]} scale={isLoaded ? [1, 1, 1] : [1, 1, 1]}>

      </ViroNode>





    </ViroARScene>
  )
}

export function CameraPan() {
  return (
    <View style={styles.container}>

      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{ scene: ARScene }}
        worldAlignment="Gravity"
      />
      <Button />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})