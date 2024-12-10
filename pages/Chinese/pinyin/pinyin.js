const titleUrl = 'https://pic.imgdb.cn/item/67572161d0e0a243d4e0bb89.jpg'
const yunmuUrl = 'https://pic.imgdb.cn/item/6757ce94d0e0a243d4e0e97a.jpg'
const yunmuData = [
    {
        id: 1,
        name: 'a',
        url: 'https://pic.imgdb.cn/item/6757cdb4d0e0a243d4e0e95c.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VReHNKNjhDczVsT28zNXlZeGVKOEJ3QnJkeWxxYTRsWjhHR3o1Zy1iTEtVZGc.mp3'
    },
    {
        id: 2,
        name: 'o',
        url: 'https://pic.imgdb.cn/item/6757d0dad0e0a243d4e0e9d6.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VWRnZQVVo5QUZkSm12OHJVMzNQNWxZQjhxSnNvWVppbFNlMjZmbGFFbnR2U0E.mp3'
    },
    {
        id: 3,
        name: 'e',
        url: 'https://pic.imgdb.cn/item/6757d0e2d0e0a243d4e0e9d8.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkQ3pFVllTdWVORnNHQ2d1Vjl5R3FvQkdtOTk5YVhZMm93dUMwUkxBaF8yR0E.mp3'
    },
    {
        id: 4,
        name: 'i',
        url: 'https://pic.imgdb.cn/item/6757d0f9d0e0a243d4e0e9db.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VhdzhEc0dsQzk5Qm5UU1lVbjE1bU44QmpDSnozY1JaTERqYlJaanIyMDRkekE.mp3'
    },
    {
        id: 5,
        name: 'u',
        url: 'https://pic.imgdb.cn/item/6757d104d0e0a243d4e0e9de.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VZNzctQWRfWmpwTW1LT3JocS1hZ2NvQm9Ic0lBRVdMbXlrUGFOMFlFUGhXTlE.mp3'
    },
    {
        id: 6,
        name: 'v',
        url: 'https://pic.imgdb.cn/item/6757d10ed0e0a243d4e0e9e0.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VYTTNKMVNSQ1VoQmtDVXBBX3hZenhZQkVITHI1T3NxNTNsLWNCRzltNzQ3OXc.mp3'
    },
    {
        id: 7,
        name: 'ai',
        url: 'https://pic.imgdb.cn/item/6757d118d0e0a243d4e0e9e4.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VVdnh3XzBzOGk1T292OFE4VzlJVjVNQmo2cWNRNl9iWEk4UkhWeUF0TzlqTVE.mp3'
    },
    {
        id: 8,
        name: 'ei',
        url: 'https://pic.imgdb.cn/item/6757d125d0e0a243d4e0e9e5.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VSQXVFV1dzcV9WUHFxNWpFQzYxb3lZQnFsMDNoNGFvVXBIVGhCeS1YRzFoNmc.mp3'
    },
    {
        id: 9,
        name: 'ui',
        url: 'https://pic.imgdb.cn/item/6757d131d0e0a243d4e0e9e9.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkU004VkdiNVRwQnVOWEljU0kwb2l3QnZHZVdCV1YxeDlQb1VJekZhM0c2Z0E.mp3'
    },
    {
        id: 10,
        name: 'ao',
        url: 'https://pic.imgdb.cn/item/6757d13cd0e0a243d4e0e9ec.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VUVHpaMjFMRzJwT2pKdGdKZHFHWEZFQllhYmZ4WjhGa2NDaVQtU3VLTktoZ0E.mp3'
    },
    {
        id: 11,
        name: 'ou',
        url: 'https://pic.imgdb.cn/item/6757d146d0e0a243d4e0e9ee.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VjOC1UQXQ2TWtGT3QyMUprQTMxVzRnQjNlRFBhamc1V1M0UHV6Zl9CUEU2TFE.mp3'
    },
    {
        id: 12,
        name: 'iu',
        url: 'https://pic.imgdb.cn/item/6757d152d0e0a243d4e0e9f0.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VYeXotNlMxY0xWTmtnQ2k4M25ZNEpnQkRSdHd2WWpUaHlNNDNpVFJKUVRxY2c.mp3'
    },
    {
        id: 13,
        name: 'ie',
        url: 'https://pic.imgdb.cn/item/6757d15dd0e0a243d4e0e9f3.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0ViMjJJYTFiN3g1Sm1saFRfeFYyLWpFQkdDZmpYTXhuSjB4TUhzMWdVQ25WVkE.mp3'
    },
    {
        id: 14,
        name: 've',
        url: 'https://pic.imgdb.cn/item/6757d16dd0e0a243d4e0e9f7.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VZcEVfbjJhRmpCS2lxQkc5dE9JM0p3QlVTWHFQeWpFbE5BUVNYcHQwNjJYVVE.mp3'
    },
    {
        id: 15,
        name: 'er',
        url: 'https://pic.imgdb.cn/item/6757d17ad0e0a243d4e0e9fb.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkRUstc2hJaGl4RHBBNUdBX2dOcHdJQmNFcFdzLUZYeTh6Mlhqd2FYVE5sWWc.mp3'
    },
    {
        id: 16,
        name: 'an',
        url: 'https://pic.imgdb.cn/item/6757d186d0e0a243d4e0e9fe.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VTaUhKeW90VEg5T2tIaWhLZzd5eTFBQmIxU0RSUERSbXhiUmtqc3FPVjNKLWc.mp3'
    },
    {
        id: 17,
        name: 'en',
        url: 'https://pic.imgdb.cn/item/6757d19cd0e0a243d4e0ea08.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkY09KeXFERGIxUGhBSW1FQTgwWms0QkdYcno4ZDN0ZFNIR2JUWFA3dG10T2c.mp3'
    },
    {
        id: 18,
        name: 'in',
        url: 'https://pic.imgdb.cn/item/6757d1aad0e0a243d4e0ea11.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VTaGtPeHdwbEZOTGhsUmRydDZUeHRvQlpNeDJ4c0M3eGtMQmpzTVlaQldfZVE.mp3'
    },
    {
        id: 19,
        name: 'un',
        url: 'https://pic.imgdb.cn/item/6757d1c1d0e0a243d4e0ea14.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VWNWtpZGRKeTRoS3RwdjZRSjVOcmRrQklsdW55N1NpSmZwQmpHSjFMZ0RodVE.mp3'
    },
    {
        id: 20,
        name: 'vn',
        url: 'https://pic.imgdb.cn/item/6757d1d4d0e0a243d4e0ea1a.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VjRko3NGxZSFdoRGduSGtEZlRxd1JzQnhaLUlTT0hBVE13TEVUdjQ4LUxIdHc.mp3'
    },
    {
        id: 21,
        name: 'ang',
        url: 'https://pic.imgdb.cn/item/6757d1f9d0e0a243d4e0ea25.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VRcmxlLW9qZFhsT3MwY1JaYWdqYUhJQlJobXQ3amFGaERwTHJ2ZG4xUHp6Y3c.mp3'
    },
    {
        id: 22,
        name: 'eng',
        url: 'https://pic.imgdb.cn/item/6757d206d0e0a243d4e0ea2b.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VlMmlka2F5NFR0THVPVjd6bzVWQW5BQlYzTVpIYWxuSWROd18tblVoNVNGdlE.mp3'
    },
    {
        id: 23,
        name: 'ing',
        url: 'https://pic.imgdb.cn/item/6757d219d0e0a243d4e0ea33.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VaX1ozeTFHZndCT25hOHRiVWNkNXIwQjQ3aENKWldRemFocVRiaVA3Q0pkZXc.mp3'
    },
    {
        id: 24,
        name: 'ong',
        url: 'https://pic.imgdb.cn/item/6757d229d0e0a243d4e0ea3d.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VRdjlMaVhiM3o1SG5aMm9uWWtvMHc0Qi1TR3N0ZkxJcHl3aVRDNFFpQ2xSamc.mp3'
    }
]
const shengmuUrl = 'https://pic.imgdb.cn/item/6757cf48d0e0a243d4e0e997.jpg'
const shengmuData = [
    {
        id: 1,
        name: 'b',
        url: 'https://pic.imgdb.cn/item/6757d26dd0e0a243d4e0ea4d.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkeXVGR203YkY5R3Voa3d6TE92OG9VQjhpWTNIal9aWV9UTWZyUmhtYURYMWc.mp3'
    },
    {
        id: 2,
        name: 'p',
        url: 'https://pic.imgdb.cn/item/6757d274d0e0a243d4e0ea4e.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VWenN0bmMtRF9aRnBvYVJybzBWdEVBQmYySUM5bmpsU2lXMmV4cGJsd3dZVHc.mp3'
    },
    {
        id: 3,
        name: 'm',
        url: 'https://pic.imgdb.cn/item/6757d27ed0e0a243d4e0ea51.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VTTm5McUhuN1MxSWtEQk04SFI2SFprQllib0R4LXlFUlBsMC1RUEMwSEpuY2c.mp3'
    },
    {
        id: 4,
        name: 'f',
        url: 'https://pic.imgdb.cn/item/6757d2a0d0e0a243d4e0ea56.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VlNkVDUjNLNHp0TXFOSVp3aE41dmVNQkZCT2Z1RmlmNTl1VEdSaVpTNFVvMlE.mp3'
    },
    {
        id: 5,
        name: 'd',
        url: 'https://pic.imgdb.cn/item/6757d2cdd0e0a243d4e0ea6e.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VTemR5R1U4WWhOTGkwVURLamZzVjdNQnNUZlJLamRlR2YwdmRNbjY1TVlfQlE.mp3'
    },
    {
        id: 6,
        name: 't',
        url: 'https://pic.imgdb.cn/item/6757d2d6d0e0a243d4e0ea75.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VXOWNPOVBnbGVoTHI0bEl0LTM0UmJBQk9jRTNFSFZyYTU3SV9EZ0wwSFlsNkE.mp3'
    },
    {
        id: 7,
        name: 'n',
        url: 'https://pic.imgdb.cn/item/6757d2e2d0e0a243d4e0ea76.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0ViRFJQcnlxLVJaT2xrd2VCbGloYVlVQjV0NHBQTl9VM0puLUVyOHppcVJLalE.mp3'
    },
    {
        id: 8,
        name: 'l',
        url: 'https://pic.imgdb.cn/item/6757d2f3d0e0a243d4e0ea78.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0ViQUh3MU1ITWd4SW92c2xGMHNCYVNnQnYzbTh1WDQ1NlJxZURBMlMxcXBxWEE.mp3'
    },
    {
        id: 9,
        name: 'g',
        url: 'https://pic.imgdb.cn/item/6757d2acd0e0a243d4e0ea5a.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VmcmlWZllFOExCQWhXRjBwaXd2cTJZQkRLV1R4NDVwbzBZS0dBcVFfMVJoOEE.mp3'
    },
    {
        id: 10,
        name: 'k',
        url: 'https://pic.imgdb.cn/item/6757d2b9d0e0a243d4e0ea5b.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VRT191VVo3SzF4RHNsN2xLRnFzYi1VQmpSY1lJMGxZc3pzWEhMd3NVS1dmSkE.mp3'
    },
    {
        id: 11,
        name: 'h',
        url: 'https://pic.imgdb.cn/item/6757d315d0e0a243d4e0ea7e.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VmX2pUenpheGM1T3FBa3lReDN4WHdNQkZyb1VReEF5SzlSWEJzaG1vcnZEOEE.mp3'
    },
    {
        id: 12,
        name: 'j',
        url: 'https://pic.imgdb.cn/item/6757d323d0e0a243d4e0ea85.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VmdWhRUGNZNGtKSXBzZkozNG5qdXNZQlQ4akFkQnRqc1c5SkpkME45MmdKOEE.mp3'
    },
    {
        id: 13,
        name: 'q',
        url: 'https://pic.imgdb.cn/item/6757d32dd0e0a243d4e0ea87.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkZTFqR3czSVI5QWhvWUxGSTU5SEhzQksyV29VLTdhbFVaWDEwTG1iZGsxMVE.mp3'
    },
    {
        id: 14,
        name: 'x',
        url: 'https://pic.imgdb.cn/item/6757d338d0e0a243d4e0ea90.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VRZUR4RUNfV1E5SGtWaVkxUXctSzRjQmI4QXR0UDU4VzFGOWJMZ3A0TzlOVVE.mp3'
    },
    {
        id: 15,
        name: 'zh',
        url: 'https://pic.imgdb.cn/item/6757d342d0e0a243d4e0eaa7.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0ViWFRfUk5IVm1oTGlROVNWQVlVbmVvQlNXUjN6a2V3Q01aVWZlMnlKWWlmX2c.mp3'
    },
    {
        id: 16,
        name: 'ch',
        url: 'https://pic.imgdb.cn/item/6757d34dd0e0a243d4e0eabd.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VXSVFWeU44VFcxRHUyWGNBeG94OEM4QjlGRjJXVFlIampaSDQzS1gxak0wVFE.mp3'
    },
    {
        id: 17,
        name: 'sh',
        url: 'https://pic.imgdb.cn/item/6757d35bd0e0a243d4e0ead3.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VieWJzS2hZT0FwRHNsOVBYSklLS1BBQlZHdWhDLUNNakU3QWY1Zko1dWFoblE.mp3'
    },
    {
        id: 18,
        name: 'r',
        url: 'https://pic.imgdb.cn/item/6757d367d0e0a243d4e0eae4.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VhYjRzd2VZSlV4SHJxQXV0eE9jdGZzQllob1NPQnRsTkZnd29BMVFPSWZrTUE.mp3'
    },
    {
        id: 19,
        name: 'z',
        url: 'https://pic.imgdb.cn/item/6757d377d0e0a243d4e0eb0d.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VUc0RsclpXM0I5Q2haZlVndlVEdzdrQkp1SVlKTnVpbkhfYUlPTi1yRERzVVE.mp3'
    },
    {
        id: 20,
        name: 'c',
        url: 'https://pic.imgdb.cn/item/6757d381d0e0a243d4e0eb28.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0Vac25DQ081SWdKS3JXekdOSkdLOF9BQnU5TDUzQW9OcFB1TmlTSzM4LWdobGc.mp3'
    },
    {
        id: 21,
        name: 's',
        url: 'https://pic.imgdb.cn/item/6757d38dd0e0a243d4e0eb45.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VVTjlpNUltM0VwSmxhLUFXWFpfdXI4QlQzUl82TUtWNkhCaDktOHRacDRoZ2c.mp3'
    },
    {
        id: 22,
        name: 'y',
        url: 'https://pic.imgdb.cn/item/6757d397d0e0a243d4e0eb55.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VZZUFtQ3VZc0RaRHRTeVRRcTNtTjlZQmlMSUE0aVM1aFpqNzAwNDR2TFg4VEE.mp3'
    },
    {
        id: 23,
        name: 'w',
        url: 'https://pic.imgdb.cn/item/6757d3a3d0e0a243d4e0eb67.jpg',
        audioUrl: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VVc05ielo4amJWSmtWTlNma241Z000QjBUTkJlZmlFNUt2TnEzSzB1dEo0VVE.mp3'
    },
]

Page({
    data: {
        titleUrl,
        yunmuUrl,
        yunmuData,
        shengmuUrl,
        shengmuData,
    },

    playAudio: function (e) {
        console.log("ok")
        const audioUrl = e.currentTarget.dataset.audio;
        const innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.src = audioUrl;
        innerAudioContext.play();
        innerAudioContext.onError((res) => {
          console.error('音频播放错误:', res.errMsg);
        });
    },
})