import datetime

now = datetime.datetime.now()

print ("%02d:%02d:%02d %02d/%02d/%04d") % (now.hour, now.minute, now.second, now.day, now.month, now.year)
