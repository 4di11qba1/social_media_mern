import ChatModel from "../models/chatModel.js";

export const createChat = async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.recieverId],
  });
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addMemberInChat = async (req, res) => {
  const chatId = req.params.chatId;
  const memberId = req.body.memberId;
  
  try {
    const chat = await ChatModel.findById(chatId)
    if (chat) {
      if (chat.members.includes(memberId)) {
        return res.status(400).json("Already in the chat.")
      }
      else {
        await chat.updateOne({
          $push: {
            members: memberId
          }
        })
        res.status(200).json("Member added.")
      }
    }
    else {
      res.status(404).json("Chat not found.")
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getChatUsers = async (req, res) => {
  const chatId = req.params.chatId;
  try {
    const chat = await ChatModel.findById(chatId);
    res.status(200).json(chat.members);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat)
  } catch (error) {
    res.status(500).json(error)
  }
};