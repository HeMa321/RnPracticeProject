import React, {PropTypes} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Linking,
  Text,
  PixelRatio,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import material from '../../native-base-theme/variables/material';
import {
  Container,
  Center,
  NativeBaseProvider,
  Flex,
  SectionList,
  Heading,
  HStack,
  VStack,
  Button,
  Box,
  Input,
} from 'native-base';
import {Icon} from '@/components/base';
import ScreenUtils from "./ScreenUtils";

export  default  class  CommonMethods {


  static headBackJumpLayout(pro){
    const {
      props,
      style=null,
      pageName,
      materials = material,
      renderBody=null,
      title='',
      subTitle,
      rightContent = null,
    } = pro
    return(
      <HStack bg={materials.toolbarDefaultBg} minH={'50px'} alignItems={'center'}
      borderBottomWidth={'1px'} borderBottomColor={materials.listBtnUnderlayColor}
              style={[style,ScreenUtils.ANDROID && { zIndex:10}]}
      >
        <HStack w="25%" alignItems="center">
          <Button
            colorScheme="green"
            onPress={() => {
              props.navigation.goBack();
            }}
            _stack={{space: 0}}
            _pressed={{opacity: 0.7}}
            variant="unstyled"
            _text={{color: materials.titleFontColor}}
            bg={null}
            startIcon={
              <Icon
                name="md-chevron-back-outline"
                style={{color: materials.titleFontColor, fontSize: 22}}/>
            }>
            {/*返回*/}
          </Button>
        </HStack>

        <VStack w="50%" alignItems="center">
          {renderBody && renderBody(pro)}
          {title && !renderBody && (
            <Text style={{color: materials.titleFontColor, fontSize: subtitle ? 14 : 16}}
                  color={materials.titleFontColor} fontSize={subtitle ? 'sm' : 'md'} numberOfLines={2}>
              {title}
            </Text>
          )}
          {subtitle && !renderBody && <Text
            style={{color: materials.titleFontColor, fontSize: 12}}
            fontSize="xs" color={materials.titleFontColor} isTruncated>
            {subtitle}
          </Text>}
        </VStack>
        <HStack w="25%" alignItems="center" pr="12px" justifyContent={'flex-end'}>
          {rightContent && rightContent(pro)}
          {
            !rightContent &&
            <TouchableOpacity onPress={() => {
              if (props.onJump) {
                props.onJump(props.navigation.navigate, pageName, pageOptions)
              } else {
                props.navigation.navigate(pageName, pageOptions)
              }
            }}>
              <Icon
                type="MaterialCommunityIcons"
                name="dots-horizontal"
                style={{color: materials.titleFontColor, fontSize: 26}}
              />
            </TouchableOpacity>
          }
        </HStack>

      </HStack>
    )
  }

  /**
   * 导航栏 返回按钮
   * @param props
   * @param materials 主题是白天 还是黑夜
   * @param title
   * @param subtitle
   * @returns {*}
   */
  static headBackLayout(props, title, materials, subtitle) {
    return (<HStack bg={materials.toolbarDefaultBg} minH="50px" alignItems="center" borderBottomWidth="1px"
                    borderBottomColor={materials.listBtnUnderlayColor}
                    style={ScreenUtils.ANDROID && {zIndex: 10}}
      >
        <HStack w="25%" alignItems="center">
          {
            props &&
            <Button
              variant={'unstyled'}
              _pressed={{opacity: 0.7}}
              _stack={{space: 0}}
              onPress={() => {
                props.navigation.goBack();
              }}
              _text={{color: materials.titleFontColor, fontSize: 13, backgroundColor: 'yellow'}}
              bg={null}
              startIcon={
                <Icon
                  name="md-chevron-back-outline"
                  style={{color: materials.titleFontColor, fontSize: 22}}/>
              }>
              返回
            </Button>
          }
        </HStack>

        <VStack w="50%" alignItems="center">
          <Heading color={materials.titleFontColor} fontSize={subtitle ? 'sm' : '20px'} numberOfLines={1}>
            {title}
          </Heading>
          {
            subtitle &&
            <Text fontSize="xs" color={materials.titleFontColor} isTruncated
                  style={{fontSize: 12, color: materials.titleFontColor}}
            >
              {subtitle}
            </Text>
          }
        </VStack>
      </HStack>
    );
  }

}
