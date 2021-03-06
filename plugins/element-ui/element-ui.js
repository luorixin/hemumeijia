import Vue from 'vue'
import {
  Message,
  Dialog,
  Carousel,
  CarouselItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  InputNumber,
  Button,
  Tooltip,
  Icon,
  Row,
  Col,
  Form,
  FormItem,
  Container,
  Header,
  Main,
  Footer,
  Link,
  Divider,
  Image,
  Backtop,
  Loading,
  MessageBox,
  Notification
} from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import locale from 'element-ui/lib/locale/lang/en'
import './element-variable.scss'

Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(Dialog, { locale })
Vue.use(Menu, { locale })
Vue.use(Submenu, { locale })
Vue.use(Dropdown, { locale })
Vue.use(DropdownMenu, { locale })
Vue.use(DropdownItem, { locale })
Vue.use(MenuItem, { locale })
Vue.use(MenuItemGroup, { locale })
Vue.use(Row, { locale })
Vue.use(Col, { locale })
Vue.use(Input, { locale })
Vue.use(InputNumber, { locale })
Vue.use(Button, { locale })
Vue.use(Tooltip, { locale })
Vue.use(Form, { locale })
Vue.use(FormItem, { locale })
Vue.use(Icon, { locale })
Vue.use(Container, { locale })
Vue.use(Header, { locale })
Vue.use(Main, { locale })
Vue.use(Footer, { locale })
Vue.use(Link, { locale })
Vue.use(Divider, { locale })
Vue.use(Image, { locale })
Vue.use(Backtop, { locale })
Vue.use(Carousel, { locale })
Vue.use(CarouselItem, { locale })

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
