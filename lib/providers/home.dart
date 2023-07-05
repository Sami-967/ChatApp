import 'package:chat_app/model/message.dart';
import 'package:flutter/foundation.dart';

class HomeProvider extends ChangeNotifier {
  final List<Message> _messages = [];

  List<Message> get messages => _messages;

  addNewMessage(Message message) {
    _messages.add(message);
    notifyListeners();
  }
}
