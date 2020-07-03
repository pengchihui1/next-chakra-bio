import React from 'react'
import { ThemeProvider, CSSReset, theme, Box, Text } from '@chakra-ui/core'

const Leftk = function () {
  return (
    <>
      {/* 个人信息 */}
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        background='#FFEFD5'
        padding='5px'

      >
        <Box>
          <Text fontSize='18px'>个人信息 </Text>
        </Box>

      </Box>
      {/* 姓名 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>姓名：</Text>
        </Box>
        <Box width='50%'>
          <Text>彭持辉</Text>
        </Box>
      </Box>
      {/* 性别 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>性别：</Text>
        </Box>
        <Box width='50%'>
          <Text>男</Text>
        </Box>
      </Box>
      {/* 籍贯 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>籍贯：</Text>
        </Box>
        <Box width='50%'>
          <Text>湖南永州</Text>
        </Box>
      </Box>
      {/* 电话 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>电话：</Text>
        </Box>
        <Box width='50%'>
          <Text>18674802502</Text>
        </Box>
      </Box>
      {/* 初始日期 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>出生：</Text>
        </Box>
        <Box width='50%'>
          <Text>1998-06-21</Text>
        </Box>
      </Box>
      {/* 毕业院校 */}
      <Box display='flex' mt='10px'>
        <Box width='30%'>
          <Text>毕业院校：</Text>
        </Box>
        <Box width='50%'>
          <Text>湖南科技大学</Text>
        </Box>
      </Box>
      {/* 学历 */}
      <Box display='flex' mt='10px'>
        <Box width='25%'>
          <Text>学历：</Text>
        </Box>
        <Box width='50%'>
          <Text>大专</Text>
        </Box>
      </Box>
    </>
  )
}

const Right = function () {
  return (
    <>
      {/* 学习经历 */}
      <Box>
        <Box background='#FFEFD5' padding='5px'><Text fontSize='18px'>毕业院校</Text></Box>
        <Box display='flex' justifyContent='space-between' margin='5px 0'>
          <Text>2017年-2019年</Text>
          <Text>专科</Text>
          <Text>经济管理专业</Text>
        </Box>
      </Box>
      {/* 职业技能 */}
      <Box marginTop='20px'>
        <Box background='#FFEFD5' padding='5px'><Text fontSize='18px'>职业技能</Text></Box>
        <Box margin='5px 0'>
          <Box><Text>熟练html css </Text></Box>
          <Box><Text>关注前端前沿技术</Text></Box>
        </Box>
      </Box>
      {/* 工作经历 */}
      <Box marginTop='20px'>
        <Box background='#FFEFD5' padding='5px'><Text fontSize='18px'>工作经历</Text></Box>
        <Box margin='5px 0'>
          <Text>描述：</Text>
          <Text>公司：湖南浮云网络科技有限公司</Text>
          <Text>职位：web前端开发</Text>
        </Box>
      </Box>

    </>
  )
}

const App = () => (
  <ThemeProvider>
    <CSSReset />
    <Box>
      <Box width='1000px' border='1px solid #7d7d7d' height='600px' margin='0 auto' mt='20px' padding='20px'>

        <Box padding='20px' backgroundColor='yellow ' opacity='0.4' color='black'>
          <Text display='flex' justifyContent='center' fontSize='24px' b>
            个人简历
          </Text>
        </Box>

        <Box height='auto' display='flex' justifyContent='space-between ' mt='20px'>
          <Box
            width='30%'
            height='400px'
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'

            padding='0 5px 5px 5px'
          >
            <Leftk />
          </Box>

          <Box width='65%'>
            <Right />
          </Box>
        </Box>
        {/* 职业技能 */}
        <Box marginTop='10px' height='50px' />

      </Box>
    </Box>
  </ThemeProvider>
)

export default App
