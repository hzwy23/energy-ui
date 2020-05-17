// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/workspace',
      component: '../layouts/SecurityLayout',
      routes: [{
        path: '/workspace',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/workspace/monitor',
            name: 'monitor',
            icon: 'smile',
            routes: [
              {
                icon: 'smile',
                name: 'data-monitor-plc1',
                path: 'data-monitor-plc1',
                component: './hardware/DeviceType',
              },
              {
                icon: 'smile',
                name: 'data-monitor-plc2',
                path: 'data-monitor-plc2',
                component: './hardware/SignalManage',
              },
              {
                icon: 'smile',
                name: 'data-monitor-plc3',
                path: 'data-monitor-plc3',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'simulation-scene',
                path: 'simulation-scene',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'map-scene',
                path: 'map-scene',
                component: './hardware/OnlineDevice',
              },              
              {
                icon: 'smile',
                name: 'track-scene',
                path: 'track-scene',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'real-location',
                path: 'real-location',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'monitor-data',
                path: 'monitor-data',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'monitor-list',
                path: 'monitor-list',
                component: './hardware/OnlineDevice',
              },
            ]
          },
          {
            path: '/workspace/system',
            name: 'system',
            icon: 'smile',
            routes: [
              {
                icon: 'smile',
                name: 'workspace-department',
                path: 'workspace-department',
                component: './workspace/system/DepartManage',
              },
              {
                icon: 'smile',
                name: 'workspace-role',
                path: 'workspace-role',
                component: './workspace/system/RoleManage',
              },
              {
                icon: 'smile',
                name: 'workspace-account',
                path: 'workspace-account',
                component: './workspace/system/AccountManage'
              },
              {
                icon: 'smile',
                name: 'picture-manage',
                path: 'picture-manage',
                component: './workspace/system/GalleryManage',
              },
              {
                icon: 'smile',
                name: 'monitor-location',
                path: 'monitor-location',
                component: './workspace/system/MonitorManage',
              },
              {
                icon: 'smile',
                name: 'menu',
                path: 'menu',
                component: './workspace/system/MenuManage',
              },
              {
                icon: 'smile',
                name: 'password',
                path: 'password',
                component: './workspace/system/Password',
              },
            ]
          },
          {
            path: '/workspace/device',
            name: 'device',
            icon: 'smile',
            routes: [
              {
                icon: 'smile',
                name: 'device-manage',
                path: 'device-manage',
                component: './hardware/DeviceType',
              },
              {
                icon: 'smile',
                name: 'device-virtual-manage',
                path: 'device-virtual-manage',
                component: './hardware/SignalManage',
              },
              {
                icon: 'smile',
                name: 'device-monitor',
                path: 'device-monitor',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'master-slave-table',
                path: 'master-slave-table',
                component: './hardware/DeviceType',
              },
              {
                icon: 'smile',
                name: 'input-argument',
                path: '/workspace/hardware/online-device',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'controller-argument',
                path: 'controller-argument',
                component: './hardware/SignalManage',
              },
              {
                icon: 'smile',
                name: 'device-maintain',
                path: 'device-maintain',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'argument-group',
                path: 'argument-group',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'alarm-reason',
                path: 'alarm-reason',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'signal-type',
                path: 'alarm-rule',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'video-device-manage',
                path: 'video-device-manage',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'time-config-manage',
                path: 'time-config-manage',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'argument-strategy-manage',
                path: 'argument-strategy-manage',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'device-type-manage',
                path: 'device-type-manage',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'memory-argument-manage',
                path: 'memory-argument-manage',
                component: './hardware/OnlineDevice',
              },
            ]
          },
          {
            path: '/workspace/logger',
            name: 'logger',
            icon: 'smile',
            routes: [
              {
                icon: 'smile',
                name: 'alarm-history',
                path: 'alarm-history',
                component: './workspace/logger/AlarmHistory',
              },
              {
                icon: 'smile',
                name: 'operation-history',
                path: 'operation-history',
                component: './workspace/logger/OperationHistory',
              },
              {
                icon: 'smile',
                name: 'sms-history',
                path: 'sms-history',
                component: './workspace/logger/SmsHistory',
              },
            ]
          },
          {
            path: '/workspace/data',
            name: 'data',
            icon: 'smile',
            routes: [
              {
                icon: 'smile',
                name: 'history-data',
                path: 'history-data',
                component: './hardware/DeviceType',
              },
              {
                icon: 'smile',
                name: 'history-curve',
                path: 'history-curve',
                component: './hardware/SignalManage',
              },
              {
                icon: 'smile',
                name: 'history-data-table',
                path: 'history-data-table',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'consumption-report-month',
                path: 'consumption-report-month',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'consumption-report-day',
                path: 'consumption-report-day',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'consumption-report-year',
                path: 'consumption-report-year',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'consumption-report-zone',
                path: 'consumption-report-zone',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'report-shortcut-day',
                path: 'report-shortcut-day',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'report-shortcut-month',
                path: 'report-shortcut-month',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'report-shortcut-year',
                path: 'report-shortcut-year',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'report-statistics-day',
                path: 'report-statistics-day',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'report-statistics-month',
                path: 'report-statistics-month',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'report-statistics-year',
                path: 'report-statistics-year',
                component: './hardware/OnlineDevice',
              },
            ]
          },
          {
            path: '/workspace/analysis',
            name: 'analysis',
            icon: 'smile',
            routes: [
              {
                icon: 'smile',
                name: 'trend-chart',
                path: 'trend-chart',
                component: './hardware/DeviceType',
              },
              {
                icon: 'smile',
                name: 'templature-wastage',
                path: 'templature-wastage',
                component: './hardware/SignalManage',
              },
              {
                icon: 'smile',
                name: 'pressure-wastage',
                path: 'pressure-wastage',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'heat-wastage',
                path: 'heat-wastage',
                component: './hardware/DeviceType',
              },
              {
                icon: 'smile',
                name: 'flow-wastage',
                path: 'flow-wastage',
                component: './hardware/SignalManage',
              },
              {
                icon: 'smile',
                name: 'energy-wastage',
                path: 'energy-wastage',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'consumption-ranking',
                path: 'consumption-ranking',
                component: './hardware/DeviceType',
              },
              {
                icon: 'smile',
                name: 'consumption-statistics',
                path: 'consumption-statistics',
                component: './hardware/SignalManage',
              },
              {
                icon: 'smile',
                name: 'argument-compare',
                path: 'argument-compare',
                component: './hardware/OnlineDevice',
              },
              {
                icon: 'smile',
                name: 'consumption-compare',
                path: 'consumption-compare',
                component: './hardware/OnlineDevice',
              },
            ]
          },
          {
            path: '/workspace/inspection',
            name: 'inspection',
            icon: 'smile',
            routes: [
              {
                icon: 'smile',
                name: 'history',
                path: 'history',
                component: './workspace/inspection/InspectionHistory',
              },
              {
                icon: 'smile',
                name: 'staff',
                path: 'staff',
                component: './workspace/inspection/InspectionStaff',
              }
            ]
          },
          {
            path: '/workspace/recharge',
            name: 'recharge',
            icon: 'smile',
            routes: [
              {
                icon: 'smile',
                name: 'online',
                path: 'online',
                component: './hardware/DeviceType',
              },
              {
                icon: 'smile',
                name: 'history',
                path: 'history',
                component: './hardware/SignalManage',
              },
              {
                icon: 'smile',
                name: 'batch-modify-offer',
                path: 'batch-modify-offer',
                component: './hardware/OnlineDevice',
              },
            ]
          },
          {
            path: '/workspace/setting',
            name: 'workspace-setting',
            icon: 'smile',
            routes: [
              {
                icon: 'smile',
                name: 'sms-recharge',
                path: 'sms-recharge',
                component: './workspace/setting/SmsRecharge',
              },
              {
                icon: 'smile',
                name: 'alarm-phone',
                path: 'alarm-phone',
                component: './workspace/setting/PhoneAlarm',
              },
              {
                icon: 'smile',
                name: 'alarm-weixin',
                path: 'alarm-weixin',
                component: './workspace/setting/WeixinAlarm',
              },
              {
                icon: 'smile',
                name: 'alarm-email',
                path: 'alarm-email',
                component: './workspace/setting/EmailAlarm',
              },
            ]
          },
          {
            path: '/workspace/help',
            name: 'help',
            icon: 'smile',
            routes: [
              {
                icon: 'smile',
                name: 'operation-explain',
                path: 'operation-explain',
                component: './workspace/help/OperationInstructions',
              },
              {
                icon: 'smile',
                name: 'tech-support',
                path: 'tech-support',
                component: './workspace/help/TechSupport',
              },
              {
                icon: 'smile',
                name: 'download',
                path: 'download',
                component: './workspace/help/Download',
              },
            ]
          },
        ]
      }]
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/ProjectLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/project/overview',
            },
            {
              path: '/project',
              name: 'project',
              icon: 'smile',
              routes: [
                {
                  icon: 'smile',
                  name: 'overview',
                  path: '/project/overview',
                  component: './project/ProjectOverview',
                },
                {
                  icon: 'smile',
                  name: 'manage',
                  path: '/project/manage',
                  component: './project/ProjectManage',
                },
                {
                  name: 'manage',
                  hideInMenu: true,
                  component: '../layouts/BlankLayout',
                  routes:[
                    {
                      name: 'manage-add',
                      path: '/project/manage/add',
                      component: './project/ProjectManage/component/AddProject',
                    },                    
                    {
                      name: 'manage-update',
                      path: '/project/manage/update',
                      component: './project/ProjectManage/component/UpdateProject',
                    },
                    {
                      name: 'manage-update-advance',
                      path: '/project/manage/advance',
                      component: './project/ProjectManage/component/AdvanceUpdateProject',
                    },
                ]
                },
              ]
            },
            {
              path: '/account',
              name: 'account',
              icon: 'smile',
              routes: [
                {
                  icon: 'smile',
                  name: 'manage',
                  path: '/account/manage',
                  component: './account/AccountManage',
                },
                {
                  name: 'manage',
                  hideInMenu: true,
                  path: '/account/manage',
                  routes: [
                    {
                      name: 'manage-account-add',
                      path: '/account/manage/add',
                      component: './account/AccountManage/component/AddOrUpdateAccount',
                    },
                    {
                      name: 'manage-account-update',
                      path: '/account/manage/update',
                      component: './account/AccountManage/component/AddOrUpdateAccount',
                    },
                  ]
                },
                {
                  icon: 'smile',
                  name: 'operation-history',
                  path: '/account/operation-history',
                  component: './account/AccountOperationHistory',
                }
              ]
            },
            {
              path: '/hardware',
              name: 'hardware',
              icon: 'smile',
              routes: [
                {
                  icon: 'smile',
                  name: 'device-type-manage',
                  path: '/hardware/device-type-manage',
                  component: './hardware/DeviceType',
                },
                {
                  name: 'device-type-manage',
                  path: '/hardware/device-type-manage',
                  hideInMenu: true,
                  routes: [
                    {
                      name: 'device-type-manage-add',
                      path: '/hardware/device-type-manage/add',
                      component: './hardware/DeviceType/component/AddOrUpdateDeviceType',
                    },
                    {
                      name: 'device-type-manage-update',
                      path: '/hardware/device-type-manage/update',
                      component: './hardware/DeviceType/component/AddOrUpdateDeviceType',
                    },
                    {
                      name: 'device-type-manage-argument',
                      path: '/hardware/device-type-manage/argument',
                      component: './hardware/DeviceType/component/ArgumentManage',
                    },
                    {
                      name: 'device-type-manage-argument-add',
                      path: '/hardware/device-type-manage/argument/add',
                      component: './hardware/DeviceType/component/AddOrUpdateArgument',
                    },
                    {
                      name: 'device-type-manage-argument-update',
                      path: '/hardware/device-type-manage/argument/update',
                      component: './hardware/DeviceType/component/AddOrUpdateArgument',
                    },
                  ]
                },
                {
                  icon: 'smile',
                  name: 'signal-type',
                  path: '/hardware/signal-type',
                  component: './hardware/SignalManage',
                },
                {
                  name: 'signal-type',
                  hideInMenu: true,
                  path: '/hardware/signal-type',
                  routes: [
                    {
                      icon: 'smile',
                      name: 'signal-type-add',
                      path: '/hardware/signal-type/add',
                      component: './hardware/SignalManage/component/AddOrUpdateSignalType',
                    },
                    {
                      icon: 'smile',
                      name: 'signal-type-update',
                      path: '/hardware/signal-type/update',
                      component: './hardware/SignalManage/component/AddOrUpdateSignalType',
                    },
                  ]
                },
                {
                  icon: 'smile',
                  name: 'online-device',
                  path: '/hardware/online-device',
                  component: './hardware/OnlineDevice',
                },
              ]
            },
            {
              path: '/setting',
              name: 'setting',
              icon: 'smile',
              routes: [
                {
                  icon: 'smile',
                  name: 'password',
                  path: '/setting/password',
                  component: './setting/Password',
                },
                {
                  icon: 'smile',
                  name: 'argument',
                  path: '/setting/argument',
                  component: './setting/Argument',
                },
                {
                  icon: 'smile',
                  name: 'templature',
                  path: '/setting/templature',
                  component: './setting/Templature',
                },
                {
                  icon: 'smile',
                  name: 'menu',
                  path: '/setting/menu',
                  component: './setting/Menu',
                }
              ]
            },
            {
              icon: 'smile',
              path: '/account/center',
              component: './user/AccountCenter',
            },
            {
              icon: 'smile',
              path: '/account/settings',
              component: './user/AccountSettings',
            },
            {
              component: './404',
            }
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  base: '/ui/',
  publicPath: '/ui/',
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
