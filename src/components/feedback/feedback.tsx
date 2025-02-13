"use client"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import sendEmail from "@/lib/sendEmail"

export function Feedback() {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(isLoading) return
    if (!message.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a message",
      })
      return
    }

    setIsLoading(true)
    try {
      await sendEmail(message)

      toast({
        title: "Thank you for your feedback!",
        description: "Your message has been sent successfully.",
      })

      // Clear the form
      setMessage("")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send feedback. Please try again later.",
      })
      console.error('Failed to send feedback:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Send Feedback
          </h2>
          <p className="text-sm text-muted-foreground">
            Help us improve Icora by sharing your thoughts and suggestions.
          </p>
        </div>

        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind? We'd love to hear your feedback..."
          className="min-h-[100px] resize-none"
          disabled={isLoading}
        />

        <Button 
          type="submit" 
          className="w-full sm:w-auto"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Feedback"}
        </Button>
      </form>
    </Card>
  )
}