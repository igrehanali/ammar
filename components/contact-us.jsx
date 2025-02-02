"use client";

import { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    description: "",
    message: "",
    acceptTerms: false,
  });

  return (
    <div className="min-h-screen lg:pt-[6rem]  bg-black text-white flex items-center justify-center p-4 ">
      <div className="  w-full max-w-7xl p-[0.1rem] rounded-[1.7rem] bg-gradient-to-t from-transparent via-[#F6F6F6] to-[#BBBBBB]">
        <div className="w-full bg-gradient-to-b from-[#0A0A09] via-[#657524] to-[#C9EB42]  max-w-7xl space-y-8  rounded-[1.7rem] p-4 ">
          <div className="w-full max-w-7xl flex flex-col justify-center  items-center ">
            <div className="text-center  space-y-2">
              <h1 className="text-4xl font-bold">Contact us</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    className="bg-white text-black"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    className="bg-white text-black"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-white text-black"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="bg-white text-black"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">Choose a topic</Label>
                <select
                  id="topic"
                  className="w-full bg-white text-black rounded-md border border-input p-2"
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  value={formData.topic}
                >
                  <option value="" disabled>
                    Select one...
                  </option>
                  <option value="topic1">Topic 1</option>
                  <option value="topic2">Topic 2</option>
                  <option value="topic3">Topic 3</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Which best describes you?</Label>
                <RadioGroup
                  onValueChange={(value) =>
                    setFormData({ ...formData, description: value })
                  }
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="first" id="first" />
                    <Label htmlFor="first">First choice</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="second" id="second" />
                    <Label htmlFor="second">Second choice</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="third" id="third" />
                    <Label htmlFor="third">Third choice</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fourth" id="fourth" />
                    <Label htmlFor="fourth">Fourth choice</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fifth" id="fifth" />
                    <Label htmlFor="fifth">Fifth choice</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  className="min-h-[150px] bg-white text-black"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, acceptTerms: checked })
                  }
                />
                <Label htmlFor="terms" className="text-sm">
                  I accept the Terms
                </Label>
              </div>

              <div className="flex justify-center">
                <Button
                  className="bg-[#D6F34C] text-black hover:bg-[#c1dd44] px-8 rounded-full"
                  size="lg"
                >
                  CONTACT US
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
