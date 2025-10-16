"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Search } from "lucide-react"

interface Reference {
  id: string
  title: string
  source: string
  url: string
  year: number
  description: string
}

export function ReferenceSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [references, setReferences] = useState<Reference[]>([])
  const [filteredReferences, setFilteredReferences] = useState<Reference[]>([])

  useEffect(() => {
    fetch("/data/references.json")
      .then((res) => res.json())
      .then((data) => {
        setReferences(data.references || [])
        setFilteredReferences(data.references || [])
      })
      .catch((err) => console.error("Failed to load references:", err))
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredReferences(references)
    } else {
      const term = searchTerm.toLowerCase()
      const filtered = references.filter(
        (ref) =>
          ref.title.toLowerCase().includes(term) ||
          ref.source.toLowerCase().includes(term) ||
          ref.description.toLowerCase().includes(term)
      )
      setFilteredReferences(filtered)
    }
  }, [searchTerm, references])

  return (
    <div className="w-full space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search references by title, source, or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12"
        />
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredReferences.length} of {references.length} references
      </div>

      <div className="grid gap-4">
        {filteredReferences.map((ref) => (
          <Card key={ref.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-base leading-snug mb-2">{ref.title}</CardTitle>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {ref.source}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {ref.year}
                    </Badge>
                  </div>
                </div>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 hover:bg-accent/10 rounded-lg transition-colors"
                  aria-label={`Visit ${ref.source}`}
                >
                  <ExternalLink className="w-4 h-4 text-accent" />
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{ref.description}</p>
            </CardContent>
          </Card>
        ))}

        {filteredReferences.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No references found matching "{searchTerm}"</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

