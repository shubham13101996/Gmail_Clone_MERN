import {
  DeleteOutline,
  InsertDriveFileOutlined,
  MailOutlined,
  Photo,
  SendOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";

export const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: Photo,
  },
  {
    name: "starred",
    title: "Starred",
    icon: StarBorderOutlined,
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendOutlined,
  },
  {
    name: "draft",
    title: "Drafts",
    icon: InsertDriveFileOutlined,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutline,
  },
  {
    name: "allmail",
    title: "All Mail",
    icon: MailOutlined,
  },
];
