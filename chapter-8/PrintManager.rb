class PrintManager
  def initialize
    @queue = Queue.new
  end

  def queue_print_job(document)
    @queue.push(document)
  end

  def run
    while @queue.length > 0
      print(@queue.shift)
    end
  end

  private
    def print(document)
        puts document
    end
end

print_manager = PrintManager.new
print_manager.queue_print_job("I'm first in line")
print_manager.queue_print_job("I'll cut if you let me. I'm second")
print_manager.queue_print_job("What is this a bank? I got here third")
print_manager.queue_print_job("I'm hungry. I'm 4th")
print_manager.queue_print_job("While I patiently wait, have you heard of the Daily Code Kickoff? It's at 1:30am UTC. AND I'M 5TH")
print_manager.queue_print_job("on twitch.tv/agileventures? I'm last in line")
print_manager.run
