import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ComparisonTable() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Lucent Compares</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            See how ion-exchange technology stacks up against other filtration methods
          </p>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-4 px-4 font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold bg-accent/10">
                        <div className="text-accent font-bold">Lucent</div>
                        <div className="text-xs font-normal text-muted-foreground">Ion-Exchange</div>
                      </th>
                      <th className="text-center py-4 px-4 font-semibold">
                        <div>Pitcher Filter</div>
                        <div className="text-xs font-normal text-muted-foreground">Carbon</div>
                      </th>
                      <th className="text-center py-4 px-4 font-semibold">
                        <div>Generic RO</div>
                        <div className="text-xs font-normal text-muted-foreground">Reverse Osmosis</div>
                      </th>
                      <th className="text-center py-4 px-4 font-semibold">
                        <div>Basic Carbon</div>
                        <div className="text-xs font-normal text-muted-foreground">Activated Carbon</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">PFAS Removal</td>
                      <td className="text-center py-4 px-4 bg-accent/5">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-accent" />
                          <span className="font-semibold">95-99%</span>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4 text-muted-foreground">Limited</td>
                      <td className="text-center py-4 px-4">
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-4 px-4 text-muted-foreground">Minimal</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Flow Rate</td>
                      <td className="text-center py-4 px-4 bg-accent/5 font-semibold">0.5 GPM</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">Slow</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">0.1-0.3 GPM</td>
                      <td className="text-center py-4 px-4">1-2 GPM</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Cost per Liter</td>
                      <td className="text-center py-4 px-4 bg-accent/5 font-semibold">$0.08</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">$0.15</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">$0.12</td>
                      <td className="text-center py-4 px-4">$0.05</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Maintenance</td>
                      <td className="text-center py-4 px-4 bg-accent/5 font-semibold">6-9 months</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">2 months</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">6-12 months</td>
                      <td className="text-center py-4 px-4">3-6 months</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Installation</td>
                      <td className="text-center py-4 px-4 bg-accent/5 font-semibold">Simple</td>
                      <td className="text-center py-4 px-4">
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-4 px-4 text-muted-foreground">Complex</td>
                      <td className="text-center py-4 px-4">Moderate</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">NSF Certified</td>
                      <td className="text-center py-4 px-4 bg-accent/5">
                        <Check className="w-5 h-5 text-accent mx-auto" />
                      </td>
                      <td className="text-center py-4 px-4">
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-4 px-4">
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-4 px-4">
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
